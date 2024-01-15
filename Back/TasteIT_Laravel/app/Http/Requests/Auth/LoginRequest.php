<?php

namespace App\Http\Requests\Auth;
use App\Models\User;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();
    
        // Tries to authenticate the user
        if (! Auth::attempt($this->credentialsWithEnabled(), $this->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey());
    
            $errorMessage = $this->isDisabledUser()
                ? trans('auth.not_enabled')
                : trans('auth.failed');
    
            throw ValidationException::withMessages([
                'email' => $errorMessage,
            ]);
        }
    
        RateLimiter::clear($this->throttleKey());
    }

    protected function credentialsWithEnabled(): array
    {
        return array_merge($this->only('email', 'password'), ['enabled' => true]);
    }

    protected function isDisabledUser(): bool
    {
        return User::where('email', $this->email)->exists() && ! User::where('email', $this->email)->first()->enabled;
    }


    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->input('email')).'|'.$this->ip());
    }
}

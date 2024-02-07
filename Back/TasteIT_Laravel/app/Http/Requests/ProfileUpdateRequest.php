<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'firstname' => 'required|string|max:50',
            'surname' => 'nullable|string|max:100',
            'username' => 'required|string|max:50|unique:'.User::class.',username,'.$this->user()->id,
            'email' => ['required', 'string', 'lowercase', 'email', 'max:100', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }
}

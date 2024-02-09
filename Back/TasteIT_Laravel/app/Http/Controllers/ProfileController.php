<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string|max:50',
            'surname' => 'nullable|string|max:100',
            'username' => 'required|string|max:50|unique:'.User::class.',username,'.$request->user()->id,
            'email' => ['required', 'string', 'lowercase', 'email', 'max:100', Rule::unique(User::class)->ignore($request->user()->id)],
            'image' => 'nullable|image'
        ],[
            'image.image' => 'The file must be an image.'
        ]);
        $user = User::find($request->user()->id);

        $user->firstname = $request->firstname;
        $user->surname = $request->surname;
        $user->username = $request->username;
        $user->email = $request->email;

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $path = 'assets/img/recipes';

            $imageName = time() . '.' . $file->getClientOriginalExtension();

            // Guardar la imagen en la carpeta 'public/img'
            $file->move(public_path('assets/img/recipes'), $imageName);

            $user->profileImg = "/".$path."/".$imageName;
        }
        $user->save();

        return Redirect::route('profile');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}

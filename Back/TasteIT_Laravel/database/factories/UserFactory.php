<?php

namespace Database\Factories;

use App\Models\User;
use App\Events\CreatedUser;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'username' => $this->faker->name(),
            'firstName' => $this->faker->firstName(),
            'surname' => $this->faker->lastName(),
            'email' => $this->faker->email(),
            'password' => 'changeme1A',
            'enabled' => true,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (User $user) {
            event(new CreatedUser($user));
        });
    }
}

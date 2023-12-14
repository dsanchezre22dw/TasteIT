<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->word(),
            'description'  => $this->faker->paragraphs(3, true),
            'duration_mins' => $this->faker->numberBetween(1,240),
            'difficulty' => $this->faker->randomElement(['beginner','medium','expert']),
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}

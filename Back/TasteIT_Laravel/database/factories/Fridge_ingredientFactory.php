<?php

namespace Database\Factories;

use App\Models\Fridge;
use App\Models\Ingredient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fridge_ingredient>
 */
class Fridge_ingredientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fridge_id' => Fridge::inRandomOrder()->first()->id,
            'ingredient_id' => Ingredient::inRandomOrder()->first()->id,
            'amount' => $this->faker->numberBetween(1,200),
        ];
    }
}

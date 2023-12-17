<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Ingredient_type;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ingredient_ingredient_type>
 */
class IngredientIngredientTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ingredient_id' => Ingredient::inRandomOrder()->first()->id,
            'ingredient_type_id' => Ingredient_type::inRandomOrder()->first()->id,
        ];
    }
}

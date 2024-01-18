<?php

namespace Database\Factories;

use App\Models\Recipe;
use App\Models\Recipe_type;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe_Recipe_type>
 */
class RecipeRecipeTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'recipe_id' => Recipe::inRandomOrder()->first()->id,
            'recipe_type_id' => Recipe_type::inRandomOrder()->first()->id,
        ];
    }
}

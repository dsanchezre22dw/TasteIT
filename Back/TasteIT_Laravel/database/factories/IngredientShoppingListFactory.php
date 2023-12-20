<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Shopping_list;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\IngredientShoppingList>
 */
class IngredientShoppingListFactory extends Factory
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
            'shopping_list_id' => Shopping_list::inRandomOrder()->first()->id,
            'amount' => $this->faker->numberBetween(1,200),
        ];
    }
}

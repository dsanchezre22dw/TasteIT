<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\IngredientRecipe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class IngredientRecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IngredientRecipe::factory(10000)->create();
    }
}

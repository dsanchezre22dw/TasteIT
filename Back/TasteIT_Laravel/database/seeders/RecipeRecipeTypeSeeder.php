<?php

namespace Database\Seeders;

use App\Models\RecipeRecipeType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecipeRecipeTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RecipeRecipeType::factory(5000)->create();
    }
}

<?php

namespace Database\Seeders;

use App\Models\IngredientIngredientType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IngredientIngredientTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IngredientIngredientType::factory(5000)->create();
    }
}

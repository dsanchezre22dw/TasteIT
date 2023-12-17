<?php

namespace Database\Seeders;

use App\Models\Fridge_ingredient;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FridgeIngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Fridge_ingredient::factory(200)->create();
    }
}

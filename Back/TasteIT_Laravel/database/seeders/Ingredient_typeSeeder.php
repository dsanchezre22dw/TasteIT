<?php

namespace Database\Seeders;

use App\Models\Ingredient_type;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class Ingredient_typeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ingredient_type::factory(200)->create();
    }
}

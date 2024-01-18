<?php

namespace Database\Seeders;

use App\Models\Recipe_type;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class Recipe_typeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipe_type::factory(200)->create();
    }
}

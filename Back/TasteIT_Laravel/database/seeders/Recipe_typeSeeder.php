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
    public function run()
    {
        $types = [
            'spicy', 'salty', 'sweet', 'vegan', 'vegetarian', 'cold', 'hot',
            'gluten-free', 'low-carb', 'keto', 'paleo', 'mediterranean',
            'asian', 'mexican', 'italian', 'spanish', 'indian',
            'american', 'chinese', 'french', 'healthy'
        ];

        foreach ($types as $type) {
            Recipe_type::create(['name' => $type]);
        }
    }
}

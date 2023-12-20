<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\IngredientShoppingList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class IngredientShoppingListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IngredientShoppingList::factory(500)->create();
    }
}

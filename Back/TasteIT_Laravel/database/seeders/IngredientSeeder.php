<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Ingredient;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faker = Faker::create();

        // Lista de nombres de ingredientes reales
        $ingredientNames = [
            'milk', 'onion', 'garlic', 'tomato', 'potato', 'chicken', 'beef', 'pork', 'rice', 'pasta',
            'carrot', 'lettuce', 'spinach', 'broccoli', 'mushroom', 'cheese', 'eggs', 'flour',
            'sugar', 'salt', 'pepper', 'olive oil', 'butter', 'vinegar', 'honey', 'lemon', 'cinnamon', 'bread',
            'banana', 'cream', 'bacon', 'spice pepper', 'tuna', 'corn tortilla'
        ];

        $ingredientPaths = [
            'milk.jpg', 'onion.jpg', 'garlic.jpg', 'tomato.jpg', 'potato.jpg', 'chicken.jpg', 'beef.jpg', 'pork.jpg', 'rice.jpg', 'pasta.jpg',
            'carrot.jpg', 'lettuce.jpeg', 'spinach.jpg', 'broccoli.jpg', 'mushroom.jpg', 'cheese.jpeg', 'eggs.jpg', 'flour.jpg',
            'sugar.jpg', 'salt.jpg', 'pepper.jpg', 'olive-oil.jpg', 'butter.jpg', 'vinegar.jpg', 'honey.jpg', 'lemon.png', 'cinnamon.jpg', 'bread.jpg',
            'banana.jpg', 'cream.jpg', 'bacon.jpg', 'spice_pepper.jpg', 'tuna.jpg', 'corn_tortilla.jpg'
        ];

        // IDs de usuarios disponibles para asignar
        $userIds = range(2, 11);

        for ($i = 0; $i < count($ingredientNames); $i++) {
            $ingredient = new Ingredient();
            $ingredient->id = $i+1;
            $ingredient->name = $ingredientNames[$i];
            $ingredient->image = "/assets/img/ingredients/" . $ingredientPaths[$i];
            $ingredient->user_id = $faker->randomElement($userIds);
            $ingredient->enabled = $faker->randomElement([true, null]);
            $ingredient->created_at = Carbon::now()->subDays(rand(0, 365));
            $ingredient->save();
        }
    }
}

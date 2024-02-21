<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\Recipe_type;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        $faker = Faker::create();

        $recipes = [
            [
                'title' => 'Banana Smoothie',
                'description' => 'Delicious and healthy banana smoothie recipe.',
                'duration_mins' => 5,
                'image' => '/assets/img/recipes/batido_platano.jpg',
                'ingredients' => ['milk', 'banana', 'sugar'],
                'types' => ['sweet', 'cold', 'vegan', 'mediterranean', 'healthy']
            ],
            [
                'title' => "American Burger",
                'description' => "A classic delight - juicy patty, fresh veggies, melted cheese, all in a soft bun.",
                'duration_mins' => 15,
                'image' => '/assets/img/recipes/burger.jpg',
                'ingredients' => ['bread', 'olive-oil', 'onion', 'cheese', 'beef', 'tomato', 'lettuce', 'salt'],
                'types' => ['american', 'salty', 'hot']
            ],
            [
                'title' => "Carbonara Pasta",
                'description' => " A classic Italian dish featuring al dente pasta coated in a luxurious sauce of eggs, Parmesan cheese, crispy bacon or pancetta, and freshly cracked black pepper.",
                'duration_mins' => 30,
                'image' => '/assets/img/recipes/carbonara.jpg',
                'ingredients' => ['cream', 'pasta', 'salt', 'spice pepper', 'onion', 'bacon'],
                'types' => ['italian', 'salty', 'hot', 'gluten-free']
            ],
            [
                'title' => "Pork Chop",
                'description' => " Juicy pork chops seasoned to perfection and expertly grilled to bring out their natural flavors. Each bite offers a delightful combination of tender meat with a satisfying charred exterior. Whether paired with creamy mashed potatoes or a crisp green salad, grilled pork chops are a delicious choice for any meal.",
                'duration_mins' => 30,
                'image' => '/assets/img/recipes/chuleta.jpg',
                'ingredients' => ['pork', 'salt', 'garlic', 'spice pepper'],
                'types' => ['salty', 'hot', 'low-carb']
            ],
            [
                'title' => "Mashed Potatoes",
                'description' => "Creamy, velvety mashed potatoes, whipped with butter, milk, and seasoning.",
                'duration_mins' => 20,
                'image' => '/assets/img/recipes/mashed_potatoes.jpg',
                'ingredients' => ['potato', 'milk', 'butter', 'spice pepper', 'salt'],
                'types' => ['french', 'salty', 'hot', 'vegetarian', 'healthy']
            ],
            [
                'title' => "Mexican Nachos",
                'description' => "Crispy tortilla chips generously layered with melted cheese.",
                'duration_mins' => 40,
                'image' => '/assets/img/recipes/nachos.jpeg',
                'ingredients' => ['corn tortilla', 'cheese', 'pepper', 'salt', 'spice pepper', 'tomato'],
                'types' => ['mexican', 'spicy', 'salty', 'hot', 'vegetarian']
            ],
            [
                'title' => "Paella",
                'description' => "A vibrant Spanish dish that embodies the essence of Mediterranean cuisine. This savory rice dish is infused with flavors from saffron, garlic, and a variety of meats, creating a symphony of taste and aroma.",
                'duration_mins' => 50,
                'image' => '/assets/img/recipes/paella.jpg',
                'ingredients' => ['rice', 'chicken', 'pepper', 'salt', 'carrot', 'onion'],
                'types' => ['spanish', 'salty', 'hot', 'mediterranean', 'gluten-free']
            ],
            [
                'title' => "Pasta with tuna and cheese",
                'description' => "A delightful combination of al dente pasta tossed in a savory sauce made with flavorful tuna, creamy melted cheese, and tangy tomatoes.",
                'duration_mins' => 20,
                'image' => '/assets/img/recipes/pasta_tuna.jpg',
                'ingredients' => ['pasta', 'tuna', 'cheese', 'tomato', 'onion', 'pepper', 'salt'],
                'types' => ['italian', 'salty', 'hot']
            ],
            [
                'title' => "Cheesecake",
                'description' => "A decadent dessert masterpiece that tantalizes the taste buds with its rich, creamy texture and irresistible flavors. This indulgent treat features a buttery graham cracker crust cradling a velvety smooth filling made from cream cheese, eggs, and sugar.",
                'duration_mins' => 40,
                'image' => '/assets/img/recipes/tarta_queso.jpg',
                'ingredients' => ['cheese', 'butter', 'milk', 'eggs', 'sugar'],
                'types' => ['sweet', 'cold', 'vegetarian', 'low-carb', 'gluten-free']
            ],
        ];

        foreach ($recipes as $recipeData) {
            $recipe = new Recipe();
            $recipe->title = $recipeData['title'];
            $recipe->description = $recipeData['description'];
            $recipe->duration_mins = $recipeData['duration_mins'];
            $recipe->difficulty = $faker->randomElement(['beginner', 'medium', 'expert']);
            $recipe->image = $recipeData['image'];
            $recipe->rating = 0;
            $recipe->user_id = $faker->randomElement([2, 9, 10, 11]);
            $recipe->created_at = Carbon::now()->subDays(rand(0, 365));
            $recipe->save();

            // Attach ingredients to the recipe
            foreach ($recipeData['ingredients'] as $ingredientName) {
                $ingredient = Ingredient::where('name', $ingredientName)->first();
                if ($ingredient) {
                    $recipe->ingredients()->attach($ingredient->id, ['amount' => rand(100, 500)]);
                }
            }

            // Attach recipe types to the recipe
            foreach ($recipeData['types'] as $typeName) {
                $type = Recipe_type::where('name', $typeName)->first();
                if ($type) {
                    $recipe->recipe_types()->attach($type->id);
                }
            }
        }
    }
}

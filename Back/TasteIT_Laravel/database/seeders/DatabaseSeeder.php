<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(UserSeeder::class);
        $this->call(RecipeSeeder::class);
        $this->call(IngredientSeeder::class);
        $this->call(Recipe_typeSeeder::class);
        $this->call(ValorationSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(SaveSeeder::class);
        $this->call(RecipeRecipeTypeSeeder::class);
        $this->call(FridgeIngredientSeeder::class);
        $this->call(IngredientRecipeSeeder::class);
        $this->call(IngredientShoppingListSeeder::class);
        $this->call(FollowSeeder::class); //With random data a register can be exactly the same
    }
}

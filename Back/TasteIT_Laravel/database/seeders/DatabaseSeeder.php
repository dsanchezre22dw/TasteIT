<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\SaveSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\FollowSeeder;
use Database\Seeders\FridgeSeeder;
use Database\Seeders\RecipeSeeder;
use Database\Seeders\IngredientSeeder;
use Database\Seeders\ValorationSeeder;
use Database\Seeders\Recipe_typeSeeder;
use Database\Seeders\Chefs_detailSeeder;
use Database\Seeders\ConfigurationSeeder;
use Database\Seeders\Shopping_listSeeder;
use Database\Seeders\FridgeIngredientSeeder;
use Database\Seeders\IngredientShoppingListSeeder;

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

        $this->call(ConfigurationSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(Shopping_listSeeder::class);
        $this->call(FridgeSeeder::class);
        $this->call(Chefs_detailSeeder::class);
        $this->call(FollowSeeder::class);
        $this->call(Recipe_typeSeeder::class);
        $this->call(IngredientSeeder::class);
        $this->call(RecipeSeeder::class);
        $this->call(FridgeIngredientSeeder::class);
        $this->call(IngredientShoppingListSeeder::class);
        $this->call(SaveSeeder::class);
        $this->call(ValorationSeeder::class);

    }
}

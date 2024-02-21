<?php

namespace Database\Seeders;

use App\Models\Save;
use App\Models\User;
use App\Models\Recipe;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SaveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $userIds = range(2, 11);
        $recipeIds = range(1, 9);

        $existingPairs = [];

        for ($i = 0; $i < 50; $i++) {
            $userId = rand(2, 11);
            $recipeId = rand(1, 9);

            // Verificar si el par user_id y recipe_id ya existe
            $pair = $userId . '-' . $recipeId;
            if (in_array($pair, $existingPairs)) {
                continue; // Ir al siguiente ciclo si ya existe el par
            }

            // Verificar si el usuario ya ha creado la receta
            $user = User::find($userId);
            $recipe = Recipe::find($recipeId);

            if ($user && $recipe && $recipe->user_id !== $userId) {
                DB::table('saves')->insert([
                    'user_id' => $userId,
                    'recipe_id' => $recipeId,
                ]);
                $existingPairs[] = $pair;
            }
        }
    }
}

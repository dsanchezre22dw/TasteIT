<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\IngredientShoppingList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class IngredientShoppingListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        $existingPairs = [];

        for ($i = 0; $i < 100; $i++) {
            $shopping_listId = rand(1, 7);
            $ingredientId = rand(1, 34);

            // Verificar si el par ya existe
            $pair = $shopping_listId . '-' . $ingredientId;
            if (in_array($pair, $existingPairs)) {
                continue;
            }

            $amount = rand(100, 500);

            // Crear el registro
            DB::table('ingredient_shopping_list')->insert([
                'shopping_list_id' => $shopping_listId,
                'ingredient_id' => $ingredientId,
                'amount' => $amount,
            ]);

            // Agregar el par a la lista de pares existentes
            $existingPairs[] = $pair;
        }
    }
}

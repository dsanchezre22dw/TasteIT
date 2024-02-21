<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fridge_ingredient;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FridgeIngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        $existingPairs = [];

        for ($i = 0; $i < 100; $i++) {
            $fridgeId = rand(1, 7);
            $ingredientId = rand(1, 34);

            // Verificar si el par ya existe
            $pair = $fridgeId . '-' . $ingredientId;
            if (in_array($pair, $existingPairs)) {
                continue;
            }

            $amount = rand(100, 500);

            // Crear el registro
            DB::table('fridge_ingredient')->insert([
                'fridge_id' => $fridgeId,
                'ingredient_id' => $ingredientId,
                'amount' => $amount,
            ]);

            // Agregar el par a la lista de pares existentes
            $existingPairs[] = $pair;
        }
    }
}

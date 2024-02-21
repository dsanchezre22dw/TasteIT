<?php

namespace Database\Seeders;

use App\Models\Recipe;
use App\Models\Valoration;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ValorationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $userIds = range(2, 11);
        $recipeIds = range(1, 9);

        $existingPairs = [];

        // Títulos y descripciones posibles
        $positiveTitles = ["Very Good", "Excellent", "Awesome", "Delicious", "Fantastic", "Yummy", "Superb", "Great", "Terrific", "Outstanding"];
        $positiveDescriptions = [
            "This recipe is amazing!",
            "Highly recommended!",
            "You have to try this!",
            "Absolutely delicious!",
            "Incredible taste!",
            "I love it!",
            "Perfect!",
            "Tasty and flavorful!",
            "Couldn't be better!",
            "A new favorite!",
        ];

        $negativeTitles = ["Disappointing", "Not Good", "Needs Improvement", "Poor Quality", "Not Recommended", "Lacking Flavor", "Unpleasant", "Below Average", "Not Impressed", "Terrible"];
        $negativeDescriptions = [
            "This recipe was disappointing.",
            "Not good at all.",
            "Needs improvement.",
            "Poor quality ingredients.",
            "Not recommended.",
            "Lacking flavor.",
            "Unpleasant taste.",
            "Below average.",
            "Was not impressed.",
            "Terrible experience.",
        ];

        // Crear 60 registros de valoraciones
        for ($i = 0; $i < 60; $i++) {
            $userId = rand(2, 11);
            $recipeId = rand(1, 9);

            // Verificar si el par user_id y recipe_id ya existe
            $pair = $userId . '-' . $recipeId;
            if (in_array($pair, $existingPairs)) {
                continue; // Ir al siguiente ciclo si ya existe el par
            }

            // Obtener título y descripción aleatorios
            if (rand(0, 1) == 1) {
                $randomTitle = $positiveTitles[array_rand($positiveTitles)];
                $randomDescription = $positiveDescriptions[array_rand($positiveDescriptions)];
                $randomValoration = rand(3, 5); // Valoraciones positivas de 3 a 5
            } else {
                $randomTitle = $negativeTitles[array_rand($negativeTitles)];
                $randomDescription = $negativeDescriptions[array_rand($negativeDescriptions)];
                $randomValoration = rand(1, 2); // Valoraciones negativas de 1 a 2
            }

            // Crear la valoración
            Valoration::create([
                'user_id' => $userId,
                'recipe_id' => $recipeId,
                'title' => $randomTitle,
                'valoration' => $randomValoration,
                'description' => $randomDescription,
            ]);

            $existingPairs[] = $pair;
        }

        // Calcular la media de las valoraciones para cada receta y actualizar el campo "rating"
        $recipes = Recipe::all();
        foreach ($recipes as $recipe) {
            $valorations = Valoration::where('recipe_id', $recipe->id)->pluck('valoration');
            if ($valorations->isNotEmpty()) {
                $averageRating = $valorations->avg();
                $recipe->update(['rating' => $averageRating]);
            }
        }
    }
}

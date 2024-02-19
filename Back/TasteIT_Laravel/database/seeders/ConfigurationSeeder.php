<?php

namespace Database\Seeders;

use App\Models\Configuration;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ConfigurationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Generar todas las combinaciones posibles de valores booleanos
        $booleanValues = [true, false];

        foreach ($booleanValues as $follow) {
            foreach ($booleanValues as $valorate) {
                foreach ($booleanValues as $post) {
                    // Crear una nueva instancia de Configuration con los valores actuales
                    $configuration = new Configuration();
                    $configuration->follow = $follow;
                    $configuration->valorate = $valorate;
                    $configuration->post = $post;
                    
                    // Guardar la instancia en la base de datos
                    $configuration->save();
                }
            }
        }
    }
}

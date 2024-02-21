<?php

namespace Database\Seeders;

use App\Models\Fridge;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FridgeSeeder extends Seeder
{
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            Fridge::create([
                'id' => $i,
                'user_id' => $i+1,
            ]);
        }
    }
}
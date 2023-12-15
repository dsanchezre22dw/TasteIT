<?php

namespace Database\Seeders;

use App\Models\Save;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SaveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Save::factory(1000)->create();
    }
}

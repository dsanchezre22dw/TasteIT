<?php

namespace Database\Seeders;

use App\Models\Valoration;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ValorationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Valoration::factory(1000)->create();
    }
}

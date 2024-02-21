<?php

namespace Database\Seeders;

use App\Models\Shopping_list;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class Shopping_listSeeder extends Seeder
{
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            Shopping_list::create([
                'id' => $i,
                'user_id' => $i+1,
            ]);
        }
    }
}
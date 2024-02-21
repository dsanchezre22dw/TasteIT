<?php

namespace Database\Seeders;

use App\Models\Chefs_detail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Chefs_detailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $details = [
            [
                'restaurant' => "Hell's Kitchen",
                'description' => 'Renowned American chef and TV personality.',
                'user_id' => 3,
            ],
            [
                'restaurant' => 'Restaurante Karlos Arguiñano',
                'description' => 'Renowned Spanish chef and TV personality. He is a culinary maestro blending a passion for cooking with infectious charisma. His engaging style and approachable recipes have made his cooking show a television staple in Spain.',
                'user_id' => 9,
            ],
            [
                'restaurant' => 'Restaurante Martín Berasategui',
                'description' => "Acclaimed Spanish chef. He is a culinary virtuoso renowned for his innovative approach to Basque cuisine. With multiple Michelin stars, his restaurants are gastronomic landmarks. Berasategui's culinary artistry reflects a commitment to excellence and a profound appreciation for fine dining.",
                'user_id' => 10,
            ],
            [
                'restaurant' => 'Restaurant Gordon Ramsay',
                'description' => "Fiery and iconic British chef. He is a culinary force to be reckoned with. Renowned for his Michelin-starred restaurants and TV shows, Ramsay's dynamic personality and high standards have made him a global culinary icon. His passion for perfection and no-nonsense approach define his unparalleled success in the culinary world.",
                'user_id' => 11,
            ],
        ];

        foreach ($details as $detail) {
            Chefs_detail::create($detail);
        }
    }
}

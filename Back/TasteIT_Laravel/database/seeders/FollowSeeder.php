<?php

namespace Database\Seeders;

use App\Models\Follow;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\QueryException;

class FollowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = [
            ['id' => 2],
            ['id' => 3],
            ['id' => 4],
            ['id' => 5],
            ['id' => 6],
            ['id' => 7],
            ['id' => 8],
            ['id' => 9],
            ['id' => 10],
            ['id' => 11],
        ];

        $followsCount = 30;
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < $followsCount; $i++) {
            $follower = $users[$faker->numberBetween(0, count($users) - 1)];
            $following = $users[$faker->numberBetween(0, count($users) - 1)];

            // Ensure follower and following are different users
            while ($follower['id'] === $following['id']) {
                $following = $users[$faker->numberBetween(0, count($users) - 1)];
            }

            try {
                Follow::create([
                    'follower_id' => $follower['id'],
                    'followed_id' => $following['id'],
                    'blocked' => $faker->boolean(25) // 25% probability of being blocked
                ]);
            } catch (QueryException $e) {
                continue;
            }
        }
    }
}

<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Follow;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Follow>
 */
class FollowFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        do {
            $followedUser = User::inRandomOrder()->first()->id;
            $followerUser = User::inRandomOrder()->where('id', '!=', $followedUser)->first()->id;
    
            $existingRecord = Follow::where('followed_id', 'like',$followedUser)
                ->where('follower_id', 'like',$followerUser)
                ->exists();
        } while ($existingRecord);
        
        return [
            'followed_id' => $followedUser,
            'follower_id' => $followerUser,
        ];
    }
}

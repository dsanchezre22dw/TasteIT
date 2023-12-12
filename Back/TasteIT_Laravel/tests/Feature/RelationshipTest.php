<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Fridge;
use App\Models\Recipe;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RelationsTest extends TestCase
{
    /**
     * One to One
     */

    public function fridge_user_relationship(): void
    {
        $fridge = User::first()->fridge->id;
        $fridgeId = User::first()->fridge_id;

        $this->assertEquals($fridge,$fridgeId);
    }

    /**
     * One to Many
     */
    
     public function recipe_user_relationship(): void
     {
         $recipe = Recipe::first()->user->id;
         $recipeId = Recipe::first()->user_id;
 
         $this->assertEquals($recipe,$recipeId);
     }

}

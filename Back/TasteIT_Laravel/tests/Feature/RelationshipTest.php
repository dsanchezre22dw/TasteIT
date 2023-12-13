<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RelationshipTest extends TestCase
{
    /**
     * One to One
     */

     public function fridge_user_relationship(): void
     {
         $fridge = User::first()->fridge->id;
         $fridgeId = User::first()->fridge_id;
 
         $this->assertEquals($fridge,$fridgeId);
         echo "recipe_user_relationship working";
     }
 
     /**
      * One to Many
      */
     
      public function recipe_user_relationship(): void
      {
         $recipe = Recipe::first()->user->id;
         $recipeId = Recipe::first()->user_id;
 
         $this->assertEquals($recipe,$recipeId);
         echo "fridge_user_relationship working";
      }
 
     /**
      * Many to Many
      */
 
      public function ingredient_recipe_relationship(): void
      {
         $recipe = Recipe::first()->pivot->amount;
 
         $this->assertNotNull($recipe);
         echo "ingredient_recipe_relationship working";
      }
}

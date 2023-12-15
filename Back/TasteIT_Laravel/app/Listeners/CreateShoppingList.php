<?php

namespace App\Listeners;

use App\Models\Shopping_list;
use App\Events\CreatedUser;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateShoppingList
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(CreatedUser $event): void
    {
        $shopping_list = Shopping_list::create([
            'user_id' => $event->user->id,
        ]);

        $event->user->update(['shopping_list_id' => $shopping_list->id]);
    }
}

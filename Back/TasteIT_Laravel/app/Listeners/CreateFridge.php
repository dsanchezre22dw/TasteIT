<?php

namespace App\Listeners;

use App\Models\Fridge;
use App\Events\CreatedUser;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateFridge
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
        $fridge = Fridge::create();
        $fridge->user()->associate($event->user);
    }
}

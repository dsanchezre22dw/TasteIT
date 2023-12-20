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
        // Crear un nuevo frigorífico
        $fridge = Fridge::create([
            'user_id' => $event->user->id,
            // Agrega aquí cualquier otro campo que necesites inicializar
        ]);

        // Actualizar la columna frigo_id del usuario con el ID del nuevo frigorífico
        $event->user->update(['fridge_id' => $fridge->id]);
    }
}

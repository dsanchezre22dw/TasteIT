<?php

namespace App\Listeners;

use App\Events\CreatedUser;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

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
        $frigo = Frigo::create([
            'user_id' => $event->user->id,
            // Agrega aquí cualquier otro campo que necesites inicializar
        ]);

        // Actualizar la columna frigo_id del usuario con el ID del nuevo frigorífico
        $event->user->update(['frigo_id' => $frigo->id]);
    }
}

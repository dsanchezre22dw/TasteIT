<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class DeleteLastFiveUsers extends Command
{
    protected $signature = 'users:delete-expired-chefs';

    protected $description = 'Delete expired chef users';

    public function handle()
    {
        // Seleccionar los últimos 5 usuarios chef
        $latestUsers = User::where('id', '>', '20')
                            ->get();

        foreach ($latestUsers as $user) {
            $user->delete();
        }

        $this->info('Latest 5 users deleted successfully.');
    }
}

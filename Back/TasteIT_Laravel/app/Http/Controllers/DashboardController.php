<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    public function redirectToCorrectRoute(Request $request)
    {
        // Obtén la parte de la ruta después de 'dashboard/dashboard/'
        $subroute = $request->segment(3);

        // Redirige a la ruta corregida bajo 'dashboard/'
        return redirect("dashboard/$subroute");
    }
}

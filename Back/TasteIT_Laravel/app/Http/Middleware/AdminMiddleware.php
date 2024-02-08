<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Gate;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        if (!Gate::allows('access-admin')) {
            return redirect()->route('recipes.index');
        }
        
        return $next($request);
    }
}

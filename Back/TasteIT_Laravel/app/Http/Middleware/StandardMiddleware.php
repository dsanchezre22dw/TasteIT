<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Gate;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StandardMiddleware
{
    public function handle($request, Closure $next)
    {
        if (!Gate::allows('access-standard') && !Gate::allows('access-chef')) {
            return redirect()->route('statistics.index');
        }
        
        return $next($request);
    }
}

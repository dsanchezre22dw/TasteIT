<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Fridge;
use App\Models\Recipe;
use App\Models\Shopping_list;
use Inertia\Inertia;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with(['saves'])->get();


        return Inertia::render('Dashboard/pages/Admin/Users/indexuser', [
            'users' => $users,
        ]);
    }

    public function profile()
    {
        return $this->show(Auth::id());
    }


    public function show($userId)
    {
        $recipes = Recipe::with(['recipe_types', 'valorations', 'user'])->get();
    
        $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
            $avgValoration = $recipe->valorations->avg('pivot.valoration');
            $avgValoration = number_format($avgValoration, 2);
            $recipe->avg_valoration = $avgValoration;
    
            return $recipe;
        });

        return Inertia::render('Dashboard/pages/Standard/Profile/profile', [
            'actualUser' => \App\Models\User::with(['followers', 'following'])->findOrFail(Auth::id()),
            'user' => \App\Models\User::with(['followers', 'following'])->findOrFail($userId),
            'savedRecipesIds' => Auth::user()->saves()->pluck('recipe_id')->toArray(),
            'recipes' => $recipesWithTypesAndAvgValorations,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(User $user)
    {
        $users = User::all();

        return Inertia::render('Dashboard/pages/Admin/Users/adduser', [
            'users' => $users,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $userData = $request->validate([
            'firstname' => 'required|string|max:50',
            'surname' => 'nullable|string|max:100',
            'username' => 'required|string|max:50|unique:'.User::class,
            'email' => 'required|lowercase|email|max:100|unique:'.User::class,
            'password' => ['required', 'confirmed', 'min:8', Password::min(8)->mixedCase()->numbers()],
            'enabled' => 'required|boolean',
            'usertype' => 'required|in:admin,standard,chef',
        ]);

        $user = User::create($userData);

        $user->fridge()->create();
        $user->shopping_list()->create();
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = \App\Models\User::findOrFail($id);
        return Inertia::render('Dashboard/pages/Admin/Users/edituser', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = \App\Models\User::findOrFail($id);

        $request->validate([
            'firstname' => 'required|string|max:50',
            'surname' => 'nullable|string|max:100',
            'username' => 'required|string|max:50|unique:'.User::class.',username,'.$id,
            'email' => 'required|lowercase|email|max:100|unique:'.User::class.',email,'.$id,
            'enabled' => 'required|boolean',
            'usertype' => 'required|in:admin,standard,chef',
        ]);

        $user->username = $request->input('username');
        $user->firstname = $request->input('firstname');
        $user->surname = $request->input('surname');
        $user->email = $request->input('email');
        $user->type = $request->input('usertype');
        $user->enabled = $request->input('enabled');

        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->back();
    }

    public function getSuggestions($searchTerm)
    {
        // Obtain the list of users matching the search term and don't take admins
        $users = User::where('username', 'like', '%' . $searchTerm . '%')->where('type', '!=', 'admin')->get();

        // Obtain the list of recipes matching the search term
        $recipes = Recipe::where('title', 'like', '%' . $searchTerm . '%')->get();

        // Combine user and recipe results
        $results = collect([]);

        // Iterate through users, calculating relevance based on username match
        foreach ($users as $user) {
            similar_text(strtolower($searchTerm), strtolower($user->username), $similarity);
            // Multiply relevance score for users by a factor higher than 1 to prioritize them
            $results->push(['id' => $user->id, 'type' => 'user', 'name' => $user->username, 'subtitle' => $user->firstname, 'img' => $user->profileImg, 'relevance' => $similarity * 1,5]);
        }

        // Iterate through recipes, calculating relevance based on title match
        foreach ($recipes as $recipe) {
            similar_text(strtolower($searchTerm), strtolower($recipe->title), $similarity);
            $results->push(['id' => $recipe->id, 'type' => 'recipe', 'name' => $recipe->title, 'subtitle' => $recipe->user->username, 'img' => $recipe->image,'relevance' => $similarity]);
        }

        // Sort results by relevance in descending order
        $sortedResults = $results->sortByDesc('relevance')->values()->map(function ($item) {
            return ['id' => $item['id'], 'name' => $item['name'], 'subtitle' => $item['subtitle'], 'img' => $item['img'], 'type' => $item['type']];
        });

        return response()->json(['suggestions' => $sortedResults]);
    }

    public function follow(Request $request, $following_id)
    {
        $user = Auth::user();

        if (!$request->following){
            $user->following()->attach($following_id, ['blocked' => false]);
        }else{
            $user->following()->detach($following_id);
        }

        $user->save();
    }

    public function block(Request $request, $follower_id)
    {
        $user = Auth::user();

        if (!$request->blocked){
            $user->followers()->updateExistingPivot($follower_id, ['blocked' => true]);
        }else{
            $user->followers()->updateExistingPivot($follower_id, ['blocked' => false]);
        }

    }

    public function prueba()
    {

        return Inertia::render('Profile/Edit', [
        ]);
    }

    public function statistics()
    {

        return Inertia::render('Dashboard/pages/dashboard/home', [
        ]);
    }

    public function profilelayout()
    {

        return Inertia::render('Dashboard/pages/dashboard/profile', [
        ]);
    }

    public function getTopUsers()
    {
        $lastMonth = Carbon::now()->subMonth();
    
        // Subconsulta para obtener el total de recetas en el último mes
        $totalRecipesLastMonth = Recipe::where('created_at', '>=', $lastMonth)->count();
    
        // Consulta para obtener los usuarios y contar cuántas recetas han subido en el último mes
        $topUsers = User::select(
                'users.id',
                'users.username',
                'users.profileImg',
                DB::raw('COUNT(recipes.id) as recipes_count'),
                DB::raw("ROUND(COUNT(recipes.id) / $totalRecipesLastMonth * 100, 2) as recipes_percentage")
            )
            ->leftJoin('recipes', 'users.id', '=', 'recipes.user_id')
            ->where('recipes.created_at', '>=', $lastMonth)
            ->groupBy('users.id', 'users.username', 'users.profileImg')
            ->orderByDesc('recipes_count')
            ->limit(10)
            ->get();
    
        return response()->json($topUsers);
    }

    public function getNewUsersStats()
    {
        // Obtener la fecha de inicio y fin del último mes
        $lastMonth = Carbon::now()->subMonth();

        // Obtener la fecha de inicio y fin del mes anterior al último
        $previousMonth = Carbon::now()->subMonths(2);

        // Contar la cantidad de usuarios registrados en el último mes
        $usersLastMonth = User::where('created_at', '>=', $lastMonth)->count();

        // Contar la cantidad de usuarios registrados en el mes anterior al último
        $usersPreviousMonth = User::whereBetween('created_at', [$previousMonth, $lastMonth])->count();

        // Calcular el porcentaje de crecimiento
        if ($usersPreviousMonth > 0) {
            $growthPercentage = (($usersLastMonth - $usersPreviousMonth) / $usersPreviousMonth) * 100;
        } else {
            $growthPercentage = 0; // Evitar división por cero
        }

        return response()->json([
            'value' => $usersLastMonth,
            'growth' => round($growthPercentage, 2), // Redondear a dos decimales
            'title' => "New Users",
        ]);
    }

    public function getMonthlyUsers()
    {
        $newUsersByMonth = User::select(
            DB::raw('YEAR(created_at) as year'),
            DB::raw('MONTH(created_at) as month'),
            DB::raw('COUNT(*) as new_users')
        )
        ->where('created_at', '>=', now()->subYear())
        ->groupBy('year', 'month')
        ->orderBy('year')
        ->orderBy('month')
        ->get();
    
        // Mapeamos el nombre del mes
        $newUsersByMonth->transform(function ($item) {
            $monthNames = [
                1 => 'January', 2 => 'February', 3 => 'March', 4 => 'April', 5 => 'May', 6 => 'June',
                7 => 'July', 8 => 'August', 9 => 'September', 10 => 'October', 11 => 'November', 12 => 'December'
            ];
            $item->month_name = $monthNames[$item->month];
            return $item;
        });
    
        return response()->json($newUsersByMonth);
    }
    
}

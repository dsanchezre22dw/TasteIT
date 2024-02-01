<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Fridge;
use App\Models\Recipe;
use App\Models\Shopping_list;
use Inertia\Inertia;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with(['saves'])->get();
        $recipes = Recipe::with(['recipe_types', 'valorations'])->get();
    
        $recipesWithTypesAndAvgValorations = $recipes->map(function ($recipe) {
            $avgValoration = $recipe->valorations->avg('pivot.valoration');
            $avgValoration = number_format($avgValoration, 2);
            $recipe->avg_valoration = $avgValoration;
    
            return $recipe;
        });

        return Inertia::render('Dashboard/layouts/dashboard', [
            'users' => $users,
            'recipes' => $recipesWithTypesAndAvgValorations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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

        $fridge = Fridge::create([
            'user_id' => $user->id,
        ]);

        $shopping_list = Shopping_list::create([
            'user_id' => $user->id,
        ]);

        $user->fridge()->save($fridge);
        $user->shopping_list()->save($shopping_list);

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $users = User::all();
        return Inertia::render('Dashboard/layouts/dashboard', [
            'users' => $users,
        ]);    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = \App\Models\User::findOrFail($id);
        $users = User::all();
        return Inertia::render('Dashboard/layouts/dashboard', [
            'user' => $user,
            'users' => $users,
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
            'username' => 'required|string|max:50|unique:'.User::class,
            'email' => 'required|lowercase|email|max:100|unique:'.User::class,
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
        // Obtain the list of users matching the search term
        $users = User::where('username', 'like', '%' . $searchTerm . '%')->get();

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
}

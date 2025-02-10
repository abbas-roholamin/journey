<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => '/user/{user}'], function () {
    // Attach team to user
    Route::get('/team/{team}/attach', function (User $user, $team) {
        $user->teams()->attach($team);
        return "Attached";
    });

    // Detach team form user
    Route::get('/team/{team}/detach', function (User $user, $team) {
        $user->teams()->detach($team);
        return "Detach";
    });

    // Sync team with user
    Route::get('/team/{team}/sync', function (User $user, $team) {
        $user->teams()->sync($team);
        return "Sync";
    });

    Route::get(uri: '/teams', action: function (User $user) {
        return  $user->teams()->get();
    });

    Route::get(uri: '/projects', action: function (User $user) {
        return  $user->projects()->get();
    });
});

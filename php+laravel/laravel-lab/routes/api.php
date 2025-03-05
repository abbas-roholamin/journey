<?php

use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/posts-with-user', function () {
    return PostResource::collection(Post::with(relations: "user")->get());
});

Route::get('/user-with-where-has', function () {
    return UserResource::collection(User::withWhereHas('teams', function ($query) {
        return $query->where('name', 'like', '%Hamill%');
    })->get());
});

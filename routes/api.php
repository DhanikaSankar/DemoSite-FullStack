<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();

// });

Route::post('/register',[AuthController::class,'register']);
Route::post('/info',[AuthController::class,'saveSystemInfo']);
Route::post('/address/{id}',[UserController::class,'storeAddress']);


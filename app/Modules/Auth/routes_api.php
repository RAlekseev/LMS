<?php

use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::withoutMiddleware('auth:sanctum')->group(function () {
        Route::post('login', 'LoginController@login');
//        Route::post('register', 'RegisterController@register')->name('register');
//
//        Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.reset-email');
//        Route::post('password/reset', 'ResetPasswordController@reset')->name('password.reset');
    });

    Route::post('logout', 'LoginController@logout');
});

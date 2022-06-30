<?php


namespace App\Modules\Auth\Controllers;


use App\Modules\Users\Models\User;
use App\Modules\Auth\Requests\LoginUserRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController
{
    /**
     * @param LoginUserRequest $request
     * @return JsonResponse
     */
    public function login(LoginUserRequest $request): JsonResponse
    {
        $user = User::whereLogin(request('login'))->first();

        if (!$user) {
            return response()->json([
                'message' => 'Неверный логин или пароль!',
                'status' => 422
            ], 422);
        }

        if (!Hash::check(request('password'), $user->password)) {
            return response()->json([
                'message' => 'Неверная почта или пароль!',
                'status' => 422
            ], 422);
        }

        if (Auth::attempt($request->validated())) {
            $user = Auth::user();
            $user->permissions = $user->permissions();
            $token = $user->createToken('api');

            return response()->json([
                'user' => $user,
                'token' => $token->plainTextToken
            ]);
        }

        return response()->json([
            'message' => 'Ошибка авторизации',
            'status' => 422
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function logout(Request $request) {
        if (Auth::check()) {
            Auth::user()->tokens()->delete();
            Auth::logout();
        } else {
            return response()->json([
                'message' => 'Вы не авторизованы',
                'status' => 422
            ], Response::HTTP_UNAUTHORIZED);
        }
    }
}

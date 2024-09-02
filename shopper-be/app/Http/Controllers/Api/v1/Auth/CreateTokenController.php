<?php

namespace App\Http\Controllers\Api\v1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class CreateTokenController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = User::where('email', $request->input(['email']))->first();

        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['We couldn\'t find an account with that email address.'],
            ]);
        }

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('web')->plainTextToken;

        return response()->json([
            'data' => [
                'user' => new UserResource($user),
                'token' => $token
            ]
        ], 201);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class PollingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $users = User::inRandomOrder()->take(10)->get();
        return Inertia::render('Polling', [
            'users' => $users,
            'currentTime' => now()->toDateTimeString(),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DeferredPropsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        return Inertia::render('DeferredProps', [
            'users' => Inertia::defer(fn() => $this->getUsers()),
            'stats' => Inertia::defer(fn() => $this->getStats(), 'stats'),
        ]);
    }

    private function getStats()
    {
        sleep(4);

        return [
            ['name' => 'Total Users', 'stat' => User::count()],
            ['name' => 'Total Companies', 'stat' => Company::count()],
        ];
    }

    private function getUsers()
    {
        sleep(2);
        return User::all()
            ->map(fn ($user) => [
                'id' => $user->getRouteKey(),
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->format('M d, Y'),
            ]);
    }
}

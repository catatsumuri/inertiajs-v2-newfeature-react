<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class InfiniteScrollController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $users = $this->loadUser();
        return Inertia::render('InfiniteScroll', [
            'users'       => Inertia::merge($this->getUserItems($users)),
            'currentPage' => $users->currentPage(),
            'lastPage'    => $users->lastPage(),
        ]);
    }

    protected function getUserItems($users)
    {
        if ($users->currentPage() != 1) {
            sleep(1);
        }
        return $users->items();
    }


    protected function loadUser()
    {
        return $users = User::paginate(10);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use App\Models\Company;
use DB;

class PartialReloadController extends Controller
{
    public function index(Request $request): Response
    {
        $companyId = $request->input('company_id');
        // $partialData = $request->header('X-Inertia-Partial-Data');
        // $requestedData = $partialData ? explode(',', $partialData) : [];

        return Inertia::render('PartialReload', [
            'users' => $this->getUsers($companyId),
            // 'users' => Inertia::lazy(fn() => $this->getUsers($companyId)),
            // 'companies' => $this->getCompany(),
            'companies' => fn () => $this->getCompany(),
            'selectedCompanyId' => $companyId,
        ]);
    }
    protected function getCompany()
    {
        DB::enableQueryLog();
        $companies = Company::pluck('name', 'id');
        $queryLog = DB::getQueryLog();
        logger('Query Log:', $queryLog);
        return $companies;
    }

    protected function getUsers($companyId)
    {
        // sleep(2);
        return $companyId
            ? User::where('company_id', $companyId)->with('company')->get()
            : User::with('company')->get();
    }

    /*
    public function filter(Request $request): Response
    {
        $companyId = $request->input('company_id');

        $users = $companyId
            ? User::where('company_id', $companyId)->with('company')->get()
            : User::with('company')->get();

        return Inertia::render('PartialReload', [
            'users' => $users,
            'selectedCompanyId' => $companyId,
        ]);
    }
     */
}

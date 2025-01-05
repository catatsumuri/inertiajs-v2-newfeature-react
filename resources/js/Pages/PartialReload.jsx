import PrimaryButton from '@/Components/PrimaryButton';
import DemoLayout from '@/Layouts/DemoLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

export default function PartialReloadDemo({ users = [], companies, selectedCompanyId }) {

  const { data, setData, get, processing, errors } = useForm({
    company_id: selectedCompanyId || '',
  });

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  const handleFilter = (e) => {
    e.preventDefault();
    router.reload({
      data: { company_id: data.company_id },
      only: ['users', 'selectedCompanyId'],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    get(route('partial-reload'), {
      only: ['users', 'selectedCompanyId'],
    });
  };

  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          User List with Company Filter
        </h2>
      }
    >
      <Head title="User List with Filter" />
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        {/* Current Time Section */}
        <div className="bg-white p-6 shadow sm:rounded-lg">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Current Time: <span className="font-semibold">{currentTime}</span>
          </h3>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-6 shadow sm:rounded-lg">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Filter by Company
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 flex items-center gap-4">
              <select
                value={data.company_id}
                onChange={(e) => setData('company_id', e.target.value)}
                className="w-1/2 rounded border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a company</option>
                {Object.entries(companies).map(([id, name]) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              {/*
              <PrimaryButton type="submit" disabled={processing}>
                {processing ? 'Applying...' : 'Apply Filter'}
              </PrimaryButton>
              */}
              <PrimaryButton onClick={handleFilter}>Apply Filter</PrimaryButton>
            </div>
            {errors.company_id && (
              <p className="mt-2 text-sm text-red-600">{errors.company_id}</p>
            )}
          </form>
        </div>

        {/* User List Section */}
        <div className="bg-white shadow sm:rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Registered Users
            </h3>
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.id} className="flex items-center py-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500">ID: {user.id}</p>
                    <p className="mt-1">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                          user.company
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {user.company ? user.company.name : 'No Company'}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DemoLayout>
  );
}

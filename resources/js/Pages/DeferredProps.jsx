import DemoLayout from '@/Layouts/DemoLayout';
import { Head, Deferred } from '@inertiajs/react';
import UserListPlaceholder from '@/Components/UserListPlaceholder';

export default function DeferredProps({ users, stats }) {
  console.log(users);
  console.log(stats);
  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          DeferredProps Demo
        </h2>
      }
    >
      <Head title="DeferredProps Demo" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <section className="flex-1 mt-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Stats</h2>
            <Deferred data="stats" fallback={<div>Loading stats...</div>}>
              <ul className="space-y-4">
                {stats && stats.map((stat, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700 font-medium">{stat.name}</span>
                    <span className="text-gray-900 font-bold">{stat.stat}</span>
                  </li>
                ))}
              </ul>
            </Deferred>
          </section>

          <section className="flex-1 mt-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              User List
            </h2>
            <Deferred data="users" fallback={<UserListPlaceholder />}>
              <ul className="divide-y divide-gray-200">
                {users && users.map((user) => (
                  <li key={user.id} className="flex items-center py-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">ID: {user.id}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Deferred>
          </section>
        </div>
      </div>
    </DemoLayout>
  );
}

import DemoLayout from '@/Layouts/DemoLayout';
import { Head, usePage, usePoll } from '@inertiajs/react';

export default function Polling() {
  const { props } = usePage();
  const users = props.users || [];
  const currentTime = props.currentTime || '';

  // Poll only the "users" and "currentTime" properties every 3 seconds
  // usePoll(3000, { only: ['users', 'currentTime'] });
  usePoll(3000, { only: ['users'] });

  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Polling Demo
        </h2>
      }
    >
      <Head title="Polling Demo" />
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <section className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Current Time
          </h2>
          <p className="text-lg text-gray-700">{currentTime}</p>
        </section>

        <section className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            User List
          </h2>
          {users.length === 0 ? (
            <p className="text-gray-500">No users available.</p>
          ) : (
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
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </DemoLayout>
  );
}

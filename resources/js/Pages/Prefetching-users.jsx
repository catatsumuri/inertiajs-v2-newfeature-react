import DemoLayout from '@/Layouts/DemoLayout';
import { Head, Link } from '@inertiajs/react';

export default function PrefetchingUsers({ users }) {
  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Prefetching Demo
        </h2>
      }
    >
      <Head title="Prefetching Demo" />
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            href={route('prefetching.index')}
            className="text-blue-500 hover:underline"
          >
            Back
          </Link>

          <ul className="divide-y divide-gray-200">
            {users &&
              users.map((user) => (
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
        </div>
      </div>
    </DemoLayout>
  );
}

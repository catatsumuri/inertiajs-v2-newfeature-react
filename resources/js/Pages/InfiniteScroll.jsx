import DemoLayout from '@/Layouts/DemoLayout';
import { Head, WhenVisible } from '@inertiajs/react';
import { ClipLoader } from 'react-spinners';

export default function InfiniteScroll({ users, currentPage, lastPage }) {

  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          InfiniteScroll Demo
        </h2>
      }
    >
      <Head title="InfiniteScroll Demo" />

      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <section className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            User List
          </h2>
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

          {currentPage < lastPage && (
            <WhenVisible
              always
              params={{
                data: {
                  page: currentPage + 1,
                },
                only: ['users', 'currentPage'],
                preserveUrl: true,
              }}
            >
                <div className="flex items-center justify-center py-6">
                  <ClipLoader size={35} color={'#2563eb'} />
                </div>
            </WhenVisible>
          )}
        </section>
      </div>
    </DemoLayout>
  );
}

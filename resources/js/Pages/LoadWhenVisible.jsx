import DemoLayout from '@/Layouts/DemoLayout';
import { Head, WhenVisible } from '@inertiajs/react';
import { ClipLoader } from 'react-spinners';

export default function LoadWhenVisible({ text, users }) {
  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Load When Visible Demo
        </h2>
      }
    >
      <Head title="Load When Visible Demo" />
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {[...Array(3)].map((_, index) => (
          <section
            key={index}
            className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <p className="leading-relaxed text-gray-700">{text}</p>
          </section>
        ))}

        <section className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            User List
          </h2>
          <WhenVisible
            data={['users']}
            fallback={
              <div className="flex items-center justify-center py-6">
                <ClipLoader size={35} color={'#2563eb'} />
              </div>
            }
          >
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
          </WhenVisible>
        </section>
      </div>
    </DemoLayout>
  );
}

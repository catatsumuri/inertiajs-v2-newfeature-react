import SecondaryButton from '@/Components/SecondaryButton';
import DemoLayout from '@/Layouts/DemoLayout';
import { Head, router } from '@inertiajs/react';

export default function MergingProps({ users, currentPage, lastPage }) {
  const handleNextPageClick = () => {
    router.visit(route('merging-props'), {
      method: 'get',
      data: { page: currentPage + 1 },
      only: ['users', 'currentPage'],
      preserveScroll: true,
    });
  };

  return (
    <DemoLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Merging Props pager demo
        </h2>
      }
    >
      <Head title="Merging Props pager demo" />
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
            <div className="mt-8 flex justify-end">
              <SecondaryButton onClick={handleNextPageClick}>
                Next Page
              </SecondaryButton>
            </div>
          )}
        </section>
      </div>
    </DemoLayout>
  );
}

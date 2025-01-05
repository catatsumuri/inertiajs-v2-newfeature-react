import DemoLayout from '@/Layouts/DemoLayout';
import { Head, Link } from '@inertiajs/react';

export default function PrefetchingIndex() {
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
            href={route('prefetching.users')}
            className="text-blue-500 hover:underline"
            // prefetch
            prefetch="mount"
          >
            Show Users List
          </Link>
        </div>
      </div>
    </DemoLayout>
  );
}

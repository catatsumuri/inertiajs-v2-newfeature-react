import { Head, Link } from '@inertiajs/react';
import { FiRefreshCw, FiClock, FiEye, FiGrid, FiArrowDown, FiNavigation, FiZap } from 'react-icons/fi';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Welcome" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <header className="flex w-full max-w-4xl items-center justify-between px-6 py-8">
          <h1 className="text-3xl font-bold text-[#FF2D20] dark:text-white">
            Inertia.js Version 2.0 New Features (React)
          </h1>
        </header>

        <main className="grid w-full max-w-4xl gap-6 px-6 lg:grid-cols-3">
          <Card
            icon={<FiRefreshCw />}
            title="Partial Reloads"
            description="Understand how <strong>Partial Reloads</strong> in Inertia.js v2 leverage <strong>async operations</strong> to fetch only necessary data and improve performance."
            link={route('partial-reload')}
          />
          <Card
            icon={<FiClock />}
            title="Polling"
            description="Discover how to use <strong>Polling</strong> to automatically refresh data at regular intervals."
            link={route('polling')}
          />
          <Card
            icon={<FiGrid />}
            title="Deferred Props"
            description="Explore how to handle <strong>Deferred Props</strong> to optimize your app's responsiveness."
            link={route('deferred-props')}
          />
          <Card
            icon={<FiEye />}
            title="Load When Visible"
            description="Learn how to improve performance by loading components only when they <strong>Load When Visible</strong>."
            link={route('load-when-visible')}
          />
          <Card
            icon={<FiArrowDown />}
            title="Merging Props"
            description="Explore how to use <strong>Merging Props</strong> to create a pager demo that navigates between pages <strong>seamlessly</strong>."
            link={route('merging-props')}
          />
          <Card
            icon={<FiNavigation />}
            title="Infinite Scroll"
            description="Learn how to implement <strong>Infinite Scrolling</strong> using <strong>Load When Visible</strong> and <strong>Merging Props</strong> for seamless data loading."
            link={route('infinite-scroll')}
          />
          <Card
            icon={<FiZap />}
            title="Prefetching"
            description="Learn how to speed up navigation with <strong>Prefetching</strong> by preloading data before the user navigates."
            link={route('prefetching.index')}
          />
        </main>

        <footer className="py-8 text-center text-sm text-black dark:text-white/70">
          Laravel v{laravelVersion} (PHP v{phpVersion})
        </footer>
      </div>
    </>
  );
}

function Card({ icon, title, description, link }) {
  return (
    <Link
      href={link}
      rel="noopener noreferrer"
      className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-lg ring-1 ring-white/5 transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
    >
      <div className="flex items-center gap-2 text-2xl text-[#FF2D20] dark:text-[#FF4D40]">
        {icon}
        <h2 className="text-lg font-semibold text-black dark:text-white">{title}</h2>
      </div>
      <p
        className="text-sm text-gray-600 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <button
        className="mt-auto flex items-center gap-2 text-sm font-medium text-[#FF2D20] border-2 border-[#FF2D20] px-4 py-2 rounded-md hover:bg-[#FF2D20] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4D40]"
      >
        Learn More <FiNavigation />
      </button>
    </Link>
  );
}

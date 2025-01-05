import SecondaryButton from '@/Components/SecondaryButton';
import { router } from '@inertiajs/react';

export default function DemoLayout({ header, children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b border-gray-200 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-6">
              {header && (
                <div className="text-lg font-semibold text-gray-900">
                  {header}
                </div>
              )}
              <SecondaryButton onClick={() => router.visit('/')}>
                Go Back
              </SecondaryButton>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

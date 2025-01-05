export default function UserListPlaceholder() {
  return (
    <ul className="divide-y divide-gray-200">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="flex items-center py-4 animate-pulse">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          <div className="ml-4 flex-1 space-y-2">
            <div className="h-4 w-1/3 rounded bg-gray-300"></div>
            <div className="h-4 w-1/4 rounded bg-gray-300"></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

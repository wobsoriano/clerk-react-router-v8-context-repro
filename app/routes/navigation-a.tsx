import { Link, useNavigate } from "react-router";

import type { Route } from "./+types/navigation-a";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Navigation test A" }];
}

export default function NavigationA() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-16">
      <header>
        <p className="text-sm font-medium text-blue-600">Navigation test</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-950 dark:text-white">Page A</h1>
      </header>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/navigation/b"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
        >
          Link to page B
        </Link>
        <button
          type="button"
          onClick={() => navigate("/navigation/b")}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          useNavigate to page B
        </button>
      </div>
    </main>
  );
}

import { Link, useNavigate } from "react-router";

import type { Route } from "./+types/navigation-b";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Navigation test B" }];
}

export default function NavigationB() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-16">
      <header>
        <p className="text-sm font-medium text-green-600">Navigation test</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-950 dark:text-white">Page B</h1>
      </header>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/navigation/a"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
        >
          Link to page A
        </Link>
        <button
          type="button"
          onClick={() => navigate("/navigation/a", { replace: true })}
          className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          useNavigate replace to page A
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black dark:bg-white dark:text-gray-950"
        >
          useNavigate home
        </button>
      </div>
    </main>
  );
}

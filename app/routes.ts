import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("navigation/a", "routes/navigation-a.tsx"),
  route("navigation/b", "routes/navigation-b.tsx"),
] satisfies RouteConfig;

import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(
      () => import("../pages/HomePage") /* webpackChunkName: "HomePage" */
    ),
    exact: true,
  },
  {
    name: "Movies",
    path: "/movies",
    component: lazy(
      () => import("../pages/MoviesPage") /* webpackChunkName: "MoviesPage" */
    ),
    exact: true,
  },
  // {
  //   name: "DM",
  //   path: "/movies/:movieId",
  //   component: lazy(
  //     () => import("../pages/MoviesPage") /* webpackChunkName: "MoviesPage" */
  //   ),
  //   exact: true,
  // },
];

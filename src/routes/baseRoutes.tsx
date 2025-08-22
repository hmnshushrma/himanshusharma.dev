import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { RootLayout } from "../layouts/rootLayout";

const ResumePage = lazy(() => import("../pages/resumePage"));
// const ProjectsPage = lazy(() => import("../pages/projectsPage"));
const PrintPage = lazy(() => import("../pages/printPage"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage"));
const TimelinePage = lazy(() => import("../pages/timelinePage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <ResumePage /> },
    //   { path: "projects", element: <ProjectsPage /> },
      { path: "print", element: <PrintPage /> },
      { path: "timeline", element: <TimelinePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export default routes;

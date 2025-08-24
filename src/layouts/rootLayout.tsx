import { Suspense } from "react";
import {
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";

import Toolbar from "../components/common/commonToolbar";
import { useAnalytics } from "../hooks/useAnalytics";

export function RootLayout() {
  const { pathname } = useLocation();
  const hideChrome = pathname === "/print";
   useAnalytics();


  return (
    <div className="shell">
      {!hideChrome && (
        <>
          <header className="site-header no-print" role="banner">
            <nav className="site-nav container" aria-label="Primary">
              <a className="brand" href="/">
                HS
              </a>
              <ul className="site-nav__list" role="list">
                <li>
                  <NavLink to="/" end className="nav__link">
                    <span>Resume</span>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/projects" className="nav__link">
                    <span>Projects</span>
                  </NavLink>
                </li> */}

                <li>
                  <NavLink to="/timeline" className="nav__link">
                    <span>Timeline</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/print" className="nav__link">
                    <span>Print</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <Toolbar />
        </>
      )}

      <main className="site-main" id="main">
        <Suspense
          fallback={<div className="container page-loading">Loading…</div>}
        >
          <Outlet />
        </Suspense>
      </main>

      <ScrollRestoration />
    </div>
  );
}

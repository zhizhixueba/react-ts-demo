/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc:
 * https://reactrouter.com/en/main/start/overview
 */
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/account/Login";
import Logout from "./pages/account/Logout";
import Account from "./pages/column/Account";
import Contact from "./pages/column/Contact";
import Dashboard from "./pages/column/Dashboard";
import NotFound from "./pages/column/NotFound";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        // loader: ({ request }) =>
        // fetch("/api/dashboard.json", { signal: request.signal }),
      },
    ],
  },
  {
    path: "account",
    element: <Account />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routers;

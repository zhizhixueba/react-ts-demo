/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc:
 * https://reactrouter.com/en/main/start/overview
 */
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {Login, Register, Account} from "./index";
import Contact from "./column/Contact";
import Dashboard from "./column/Dashboard";
import NotFound from "./column/NotFound";

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
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routers;

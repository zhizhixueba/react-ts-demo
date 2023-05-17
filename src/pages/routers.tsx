/**
 * Author: Meng
 * Date: 2023-05-09
 * Desc:
 * https://reactrouter.com/en/main/start/overview
 */
import { createBrowserRouter } from "react-router-dom";

// import App from "../App";
import {
  LoginPage,
  RegisterPage,
  AccountPage,
  HomePage,
  DetailPage,
} from "./index";
// import ContactPage from "./column/Contact";
// import DashboardPage from "./column/Dashboard";
import NotFoundPage from "./column/NotFound";

const routers = createBrowserRouter([
  // { path: "/", element: <App /> },
  {
    path: "/",
    element: <AuthRoute><HomePage /></AuthRoute>,
    children: [{ path: "detail", element: <DetailPage /> }],
  },
  {
    path: "account",
    element: <AuthRoute><AccountPage /></AuthRoute>,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "logout", element: <RegisterPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

// 权限路由
function AuthRoute({children}:any) {
  console.log('AppRouter--->',children.type.name);
  if(children) {
    return children;
  }
}

export default routers;

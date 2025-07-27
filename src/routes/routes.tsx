import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"))
const Orders = lazy(() => import("../pages/Orders"))


const routes = createBrowserRouter([
    {
        path: "/dashboard",
        element: (<AppLayout />),
        children: [
            {
                path: "default",
                element: (
                    <Suspense fallback={<div>loading...</div>}>
                    <Dashboard /></Suspense>
                ),
            }, {
                path: "orders",
                element: (
                    <Suspense fallback={<div>loading...</div>}>
                    <Orders />
                    </Suspense>
                ),
            },
        ]
    }, {
    path: "/",
    element:  <Navigate to="/dashboard/default" replace />,
  },
  {
    path: "*",
    element:  <Navigate to="/dashboard/default" replace />,
  },
]);

export default routes;
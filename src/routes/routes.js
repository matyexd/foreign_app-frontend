import { lazy } from "react";
import { AppPath } from "./routes-enums";
import { Route, Switch } from "react-router-dom";
import Main from "../views/main";
import Profile from "../views/profile";
import CommunityCourses from "../views/communityCourses";
import Schools from "../views/schools";
import PurchasedCourses from "../views/purchasedCourses";
import { AuthLayout } from "../layouts/AuthLayout";

export const ROUTES = [
  {
    path: AppPath.main,
    component: Main,
    protected: false,
    exact: true,
  },
  {
    path: AppPath.authUrl,
    authNew: true,
    component: lazy(() =>
      import(/* webpackChunkName: "auth" */ "../views/auth")
    ),
    exact: true,
  },
  {
    path: AppPath.profile,
    component: Profile,
    protected: true,
  },

  {
    path: AppPath.communityCourses,
    component: CommunityCourses,
    protected: true,
  },
  {
    path: AppPath.schools,
    component: Schools,
    protected: true,
  },
  {
    path: AppPath.purchasedCourses,
    component: PurchasedCourses,
    protected: true,
  },
];

const RouteComponent = (route) => {
  if (Array.isArray(route.path) && route.authNew) {
    return (
      <AuthLayout>
        <Route
          path={route.path}
          exact={route.exact}
          render={(props) => <route.component {...props} />}
        />
      </AuthLayout>
    );
  }

  const RouteCmp = route.component;

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <RouteCmp {...props} />}
    />
  );
};

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteComponent key={index + "route"} {...route} />
      ))}
    </Switch>
  );
};

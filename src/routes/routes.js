import { lazy } from "react";
import { AppPath } from "./routes-enums";
import { Route, Switch } from "react-router-dom";
import Main from "../views/main";
import { AuthLayout } from "../layouts/AuthLayout";
import Layout from "../ui/Layout";

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
    //component: Profile,
    component: lazy(() =>
      import(/* webpackChunkName: "profile" */ "../views/profile")
    ),
    protected: true,
    title: "Профиль",
  },

  {
    path: AppPath.communityCourses,
    //component: CommunityCourses,
    component: lazy(() =>
      import(
        /* webpackChunkName: "communityCourses" */ "../views/communityCourses"
      )
    ),
    protected: true,
    title: "Курсы сообщества",
  },
  {
    path: AppPath.schools,
    //component: Schools,
    component: lazy(() =>
      import(/* webpackChunkName: "schools" */ "../views/schools")
    ),
    protected: true,
    title: "Школы",
  },
  {
    path: AppPath.purchasedCourses,
    //component: PurchasedCourses,
    component: lazy(() =>
      import(
        /* webpackChunkName: "purchasedCourses" */ "../views/purchasedCourses"
      )
    ),
    protected: true,
    title: "Приобретенные курсы",
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

  if (route.protected) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          <Layout title={route.title}>
            <RouteCmp {...props} />
          </Layout>
        )}
      />
    );
  }

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

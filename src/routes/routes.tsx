import { FC, lazy } from "react";
import { AppPath } from "./routes-enums";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "../views/main";
import { AuthLayout } from "../layouts/AuthLayout";
import Layout from "../components/Layout";
import { RoutesElement } from "@/routes/types";
import { TokenService } from "@/services/TokenService";

export const ROUTES: RoutesElement[] = [
  {
    path: AppPath.main,
    component: Main,
    // protected: false,
    exact: true,
    protected: false,
  },
  {
    path: AppPath.authUrl,
    authNew: true,
    component: lazy(
      () => import(/* webpackChunkName: "auth" */ "../views/auth")
    ),
    exact: true,
  },
  {
    path: AppPath.profile,
    //component: Profile,
    component: lazy(
      () => import(/* webpackChunkName: "profile" */ "../views/profile")
    ),
    protected: true,
    title: "Профиль",
  },

  {
    path: AppPath.schools,
    //component: Schools,
    component: lazy(
      () => import(/* webpackChunkName: "schools" */ "../views/schools")
    ),
    protected: true,
    title: "Школы",
  },
  {
    path: AppPath.myCourses,
    //component: Schools,
    component: lazy(
      () => import(/* webpackChunkName: "schools" */ "../views/myCourses")
    ),
    protected: true,
    title: "Мои курсы",
  },
  {
    path: AppPath.myStudents,
    //component: Schools,
    component: lazy(
      () => import(/* webpackChunkName: "schools" */ "../views/myStudents")
    ),
    protected: true,
    title: "Мои студенты",
  },
  {
    path: AppPath.educationCourses,
    //component: Schools,
    component: lazy(
      () =>
        import(/* webpackChunkName: "schools" */ "../views/educationCourses")
    ),
    protected: true,
    title: "Курсы преподвателя",
  },
  {
    path: AppPath.education,
    //component: Schools,
    component: lazy(
      () => import(/* webpackChunkName: "schools" */ "../views/education")
    ),
    protected: true,
    title: "Обучение",
  },

  {
    path: AppPath.purchasedCourses,
    //component: PurchasedCourses,
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "purchasedCourses" */ "../views/purchasedCourses"
        )
    ),
    protected: true,
    title: "Приобретенные курсы",
  },
  {
    path: AppPath.communityCourses,
    //component: CommunityCourses,
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "communityCourses" */ "../views/communityCourses"
        )
    ),
    protected: true,
    title: "Курсы сообщества",
  },
];

const RouteComponent = (route: RoutesElement) => {
  const RouteCmp: any = route.component;

  if (route.protected && !TokenService.isTokenExists()) {
    return <Redirect to={AppPath.signIn} />;
  }

  if (
    (!route.protected || Array.isArray(route.path)) &&
    TokenService.isTokenExists()
  ) {
    return <Redirect to={AppPath.communityCourses} />;
  }

  if (Array.isArray(route.path) && route.authNew) {
    return (
      <AuthLayout>
        <Route
          path={route.path}
          exact={route.exact}
          render={(props) => <RouteCmp {...props} />}
        />
      </AuthLayout>
    );
  }

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

export const RenderRoutes: FC<{ routes: RoutesElement[] }> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteComponent key={index + "route"} {...route} />
      ))}
    </Switch>
  );
};

import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import styles from "./Main.module.css";
import { mainRoutes } from "../../routes/mainRoutes";
import Loader from "../loader/Loader";

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;

import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import styles from "./Main.module.css";
import { mainRoutes } from "../../routes/mainRoutes";
import Loader from "../loader/Loader";
import MovieDatailsPage from "../../pages/MovieDatailsPage";

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path="/movies/:movieId"
            component={MovieDatailsPage}
            exact={false}
          />
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

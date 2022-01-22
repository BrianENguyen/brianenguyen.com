import { Route, Switch } from 'react-router-dom';
import ROUTES from './Routes';
const RenderRoutes = () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default RenderRoutes;

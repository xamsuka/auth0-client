import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/registration">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;

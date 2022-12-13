import Main from './Component/Main';
import Login from './Component/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path ="/home" component={Main} />
            <Route exact path="/login" component={Login} />
            <Redirect to ="/login" />
        </Switch>
    </Router>
  );
}

export default App;

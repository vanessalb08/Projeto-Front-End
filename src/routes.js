//Aqui ficam todas as rotas que possam existir
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./auth";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path ='/' component ={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
        </Switch>
    </Router>
);

export default Routes;
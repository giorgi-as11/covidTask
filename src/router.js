import React from "react";
import vacine from "./pages/vacine";
import { Route, Switch, Redirect } from 'react-router-dom'
import thx from "./pages/thx";
import covid from "./pages/covid";
import Auth from "./pages/auth";
import firstPage from "./pages/first";
import Advice from "./pages/advice";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path='/advice' component={Advice} />
                <Route path='/vacine' component={vacine} />
                <Route path="/thx" component={thx} />
                <Route path="/covid" component={covid} />
                <Route path="/auth" component={Auth} />
                <Route path="/" component={firstPage} />
            </Switch>
        </div>
    )
}
export default Router
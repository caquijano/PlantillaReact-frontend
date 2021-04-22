import {Switch, Route, Redirect } from "react-router-dom";
import RememberPassword from "../components/Auth/RememberPassword";
import Principal from "../components/Auth/Principal";

function PublicRouter() {
    return (
        <>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route
              exact
              path="/RememberPassword"
              component={RememberPassword}
            />
            <Redirect from="/**" to="/" />
          </Switch>
        </>
    )
}

export default PublicRouter

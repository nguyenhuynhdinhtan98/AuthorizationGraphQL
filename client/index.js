import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
  IndexRoute
} from "react-router-dom";
import { browserHistory } from "react-router";
import ApolloClient from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import LoginForm from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
const httpLink = createHttpLink({
  uri: "/graphql",
  opts: {
    credentials: "same-origin"
  }
});
const client = new ApolloClient({ dataIdFromObject: o => o.id, httpLink });
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter history={browserHistory}>
        <Switch>
          <App>
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          </App>
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};
ReactDOM.render(<Root />, document.querySelector("#root"));

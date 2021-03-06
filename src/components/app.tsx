import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./home/home";



function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div style={{ height: "100%" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
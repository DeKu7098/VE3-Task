import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";

import Page from "./Page";
import Page5 from "./Page5";
import Page4 from "./Page4";
import Page3 from "./Page3";
import Page2 from "./Page2";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Page" exact>
        <Page />
      </Route>
      <Route path="/Page2" exact>
        <Page2 />
      </Route>
      <Route path="/Page3" exact>
        <Page3 />
      </Route>
      <Route path="/Page4" exact>
        <Page4 />
      </Route>
      <Route path="/Page5" exact>
        <Page5 />
      </Route>
    </Switch>
  );
}

export default App;

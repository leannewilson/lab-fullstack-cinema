import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import EachMovie from "./EachMovie";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/movies" render={(props) => <Movies {...props} />} />
        <Route
          exact
          path="/movie/:id"
          render={(props) => <EachMovie {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

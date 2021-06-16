import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Header from "./components/header.js";
import Transition from "./hooks/transition";

//const AboutLazy = React.lazy(() => import('./pages/about.js'))

function App() {
  return (
    <Router basename="/set-react">
      <Header />
      <Transition />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

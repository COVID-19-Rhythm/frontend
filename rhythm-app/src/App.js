import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/index";
import ResearchLanding from "./components/ResearchLanding/ResearchLanding";
import Research from "./components/Research/Research";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/research" render={() => <Research />} />
        <Route exact path="/research%20" render={() => <ResearchLanding />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing/index";
import Contact from "./components/Contact/index";
import About from './components/About/About';
import Research from './components/Research/Research'
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(
          <Landing/>
        )}/>
        <Route exact path="/about" render={()=>(
          <About/>
        )}/>
        <Route exact path="/research" render={()=>(
          <Research/>
        )}/>
        <Route exact path="/dashboard" render={()=>(
          <Dashboard/>
        )}/>
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import DataViz from './DataViz';
import Resume from './Resume'
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <NavBar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/dataviz' component={DataViz} />
      <Route exact path='/resume' component={Resume} />
      <Route component={Error404} />
    </Switch>
  </div>
  );
}

export default App;

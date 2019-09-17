import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import DataViz from './DataViz';
import Resume from './Resume'
import Error404 from './Error404';


function App(){
  return (
    <div>
      <Header/>
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

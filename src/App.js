import React from 'react';
import './App.css';
import Home from './pages/Home';
import Browse from './pages/Cars';
import SingleCar from './pages/SingleCar';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/browse-cars' component={Browse} />
        <Route exact path='/contact-us' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cars/:slug' component={SingleCar} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

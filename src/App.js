import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redux } from "./store";

function App() {
  return (
    <div>
      <Redux>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Blog' component={Blog} />
            <Route path='/Details' component={Details} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        </Router>
      </Redux>
      <Footer />
    </div>
  );
}

export default App;

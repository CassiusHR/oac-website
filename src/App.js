import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from './components/Navbar'
import Index from './pages/index'
import Blog from './pages/blog'
import QuienesSomos from './pages/quienes-somos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              classNames="fade"
              key={location.key}
              timeout={1000}
            >
              <Switch location={location}>
                <Route path="/" exact component={Index}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/quienes-somos" exact component={QuienesSomos}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

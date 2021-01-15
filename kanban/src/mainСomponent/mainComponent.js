import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InBoardSpase from './../routs/inBoard'
import MainPage from '../routs/MainPage.js'
// import './MainComponentClass.sass'

let mainPage = () => <MainPage />

function MainComponent() {

  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={mainPage} />
          <Route exact path="/inBoard/:title" component={InBoardSpase} />
        </Switch>
     
    </Router>

  )
}

export default MainComponent;
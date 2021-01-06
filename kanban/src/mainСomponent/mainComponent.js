import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import Headr from './../routs/header.js'
// import './MainComponentClass.sass'


function MainComponent() {
  let header = () => <Headr />
  console.log(header)
  return (
    <Router>
      <div className="">
        {header()}
          <Switch> 
            <Route exact path="/inBoard" component={InBoardSpase} />
          </Switch>
       

      </div>
    </Router>

  )
}

export default MainComponent;
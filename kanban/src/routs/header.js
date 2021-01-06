import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import './MainComponentClass.sass'


function Headr() {
  return (

      <div className="">
        <ul className="MainComponentClass">
          <li className="Create_plate"><a href="/">let's worck!</a></li>
          <li><a href="/inBoard">In Board</a></li>
        </ul>
      </div>


  )
}

export default Headr;
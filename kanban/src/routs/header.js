import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import './MainComponentClass.sass'
import FormDialog from './../modals/modalAdd.js'

function Headr() {
  const [board, setboard] = useState()
  return (
      <div className="">
        <ul className="MainComponentClass">
          <li className="Create_plate"><FormDialog /></li>
        </ul>
      </div>


  )
}

export default Headr;
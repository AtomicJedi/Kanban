import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import './MainComponentClass.sass'
import ModalAdd from './../modals/modalAdd.js'
import Board from './../board/board.js'


function Headr(...props) {

  const [boards, setBoard] = useState([{title: 'frog'} ])

  const addBoard = (board) => {
    console.log(boards)
    setBoard(({ boards }) => ({ boards: [...boards, { id: boards.length, title: board }] }))
  }
  console.log(boards)

  return (
    <div className="">
      <Board
      // textBord={Headr.boards.board.title}
      />
      <ul className="MainComponentClass">
        <li className="Create_plate">
          <ModalAdd 
            addBoard={addBoard}
          />
        </li>
      </ul>
    </div>


  )
}

export default Headr;
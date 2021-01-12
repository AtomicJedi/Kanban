import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import './MainComponentClass.sass'
import ModalAdd from './../modals/modalAdd.js'
import Board from './../board/board.js'


function Headr() {

  const localStorageState = JSON.parse(localStorage.getItem('boards')) || []

  const [boards, setBoard] = useState([...localStorageState])
  console.log(boards)

  const addBoard = (board) => {
    console.log(board)
    setBoard(( boards ) => ( [...boards, { title: board, key: Date.now()  }] ))
   }

   localStorage.setItem('boards', JSON.stringify(boards))


  return (
    <div className="">

      <ul className="MainComponentClass">
        <li className="Create_plate">
          <ModalAdd
            addBoardprops={addBoard}
          />
        </li>
        <li>
          { 
            boards.map( (board, key) =>
            (<Board
              key={key}
              textBord={boards}
            />))
            }
        </li>
      </ul>
    </div>


  )
}

export default Headr;
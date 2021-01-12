import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import './MainComponentClass.sass'
import ModalAdd from './../modals/modalAdd.js'
import Board from './../board/board.js'


function Headr({ ...props }) {

  const [boards, setBoard] = useState([])
  console.log(boards)

  const addBoard = (board) => {
    console.log(board)
    setBoard((prevBoards ) => ( prevBoards = [{ title: board, id: Date.now()  }] ))
    // setBoard( (prev, setBoard) => prev + setBoard() ) 
   }

  // const addBoard = (board) => {
  //   console.log(boards)
  //   setBoard(({ boards }) => ({ boards: [...boards, { id: boards.length, title: board }] }))
  // }


  return (
    <div className="">
      <Board
      
      textBord={boards}
      />
      <ul className="MainComponentClass">
        <li className="Create_plate">
          <ModalAdd
            addBoardprops={addBoard}
          />
        </li>
        <li>
          { 
            // boards.map( board =>
            // (<Board
            //   textBord={board}
            // />))
            }
        </li>
      </ul>
    </div>


  )
}

export default Headr;
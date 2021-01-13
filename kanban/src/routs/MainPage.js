import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import InBoardSpase from './../routs/inBoard/inBoardSpase.js'
import './MainComponentClass.sass'
import ModalAdd from '../modals/modalAddBord.js'
import Board from '../board/board.js'
import uuid from 'react-uuid'


function MainPage() {

  const localStorageState = JSON.parse(localStorage.getItem('boards')) || []

  const [boards, setBoard] = useState([...localStorageState])
  console.log(boards)

  const addBoard = (board) => {
    console.log(board)
    setBoard((boards) => ([...boards, { title: board, key: uuid(), id: Date.now() }]))
  }

  localStorage.setItem('boards', JSON.stringify(boards))


  return (
    <div className="">

      <ul className="MainComponentClass">
        {
          boards.map((board) =>
          (<li key={board.key} className="Bord_plate">
            {console.log(board.key)}
            <Board              
              textBord={board.title}
              id={board.id}
            />
          </li>)
          )
        }
        <li className="Create_plate">
          <ModalAdd
            addBoardprops={addBoard}
          />
        </li>
      </ul>
    </div>


  )
}

export default MainPage;
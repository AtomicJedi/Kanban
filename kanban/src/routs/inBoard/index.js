import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DragDropContext } from 'react-beautiful-dnd'
import uuid from 'react-uuid'
// import { useParams } from 'react-router'
import ModalAddColumn from '../../modals/modalAddColumn.js'

import Column from './column'

import styles from './styles'

const useStyles = makeStyles(styles)

// const localStorageState = JSON.parse(localStorage.getItem('boards')) || []
// [...localStorageState]

const itemsFromBackend = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  { id: uuid(), content: 'Third task' },
  { id: uuid(), content: 'Fourth task' },
  { id: uuid(), content: 'Fifth task' }
]

// localStorage.setItem('boards', JSON.stringify(boards))

const columnsFromBackend = {
  [uuid()]: {
    name: 'Requested',
    key: uuid(),
    id: uuid(),
    items: itemsFromBackend
  },
  [uuid()]: {
    name: 'To do',
    key: uuid(),
    id: uuid(),
    items: []
  },
  [uuid()]: {
    name: 'In Progress',
    key: uuid(),
    id: uuid(),
    items: []
  },
  [uuid()]: {
    name: 'Done',
    key: uuid(),
    id: uuid(),
    items: []
  }
}

const InBoardSpase = () => {
  const classes = useStyles()
  const [columns, setColumns] = React.useState(columnsFromBackend)

  const handleDragEnd = React.useCallback((result) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }
  }, [columns, setColumns])

  const addСolumns = React.useCallback(column => {
    setColumns(columns => ({
      ...columns,
      [uuid()]: {
        name: column,
        key: uuid(),
        id: Date.now(),
        items: [{ content: 'First task', id: uuid() }]
      }
    }))
  }, [setColumns])

  const addItems = React.useCallback((task, uuidKey) => {
    setColumns(columns => ({
      ...columns,
      [uuidKey]: {
        ...columns[uuidKey],
        items: [
          ...columns[uuidKey].items,
          { content: task, id: uuid() }
        ]
      }
    }))
  }, [setColumns])
  // let itemsColumn = columns.map(item => (item.items.push({ content: task, id: uuid() })))

  return (
    <div className={classes.root}>
      {/* {key} */}

      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(columns).map(([uuidKey, { name, items }]) => (
          <Column
            key={uuidKey}
            id={uuidKey}
            name={name}
            items={items}
            addItems={addItems}
          />
        ))}
      </DragDropContext>
      <ModalAddColumn addColumnProps={addСolumns} />
    </div>
  )
}

export default InBoardSpase

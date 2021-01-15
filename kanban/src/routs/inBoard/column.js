import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Droppable } from 'react-beautiful-dnd'

import ModalAddTask from '../../modals/modalAddTask.js'
import Record from './record'

import styles from './styles'

const useStyles = makeStyles(styles)

const Column = ({
  id,
  name,
  items,
  addItems,
}) => {
  const classes = useStyles()
  const handleAddTask = (task) => addItems(task, id)

  return (
    <div className={classes.columnRoot}>
      <h2>{name}</h2>
      <div className={classes.columnInner}>
        <Droppable droppableId={id} key={id}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey"
              }}
              className={classes.columnContent}
            >
              {items.map(({ id, content }, recordIndex) => (
                <Record
                  id={id}
                  content={content}
                  index={recordIndex}
                />
              ))}
              <ModalAddTask addTaskprops={handleAddTask} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}

export default Column

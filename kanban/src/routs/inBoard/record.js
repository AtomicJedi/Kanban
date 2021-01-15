import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Draggable } from 'react-beautiful-dnd'

import styles from './styles'

const useStyles = makeStyles(styles)

const Record = ({
  id,
  index,
  content
}) => {
  const classes = useStyles()

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
            ...provided.draggableProps.style
          }}
          className={classes.recordRoot}
        >
          {content}
        </div>
      )}
    </Draggable>
  )
}

export default Record

import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Draggable } from 'react-beautiful-dnd'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './styles'

const useStyles = makeStyles(styles)

const Record = ({
  id,
  index,
  columnUuid,
  content,
  onRemoveTask,
}) => {
  const classes = useStyles()
  const handleRemoveTask = React.useCallback(() => {
    onRemoveTask(columnUuid, id)
  }, [columnUuid, id, onRemoveTask])

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
          <Tooltip title="Delete">
            <IconButton aria-label="delete" className={classes.recordRemove} onClick={handleRemoveTask}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Draggable>
  )
}

export default Record

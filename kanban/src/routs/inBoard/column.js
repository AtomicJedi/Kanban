import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Droppable } from 'react-beautiful-dnd'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ModalAddTask from '../../modals/modalAddTask.js'
import Record from './record'

import styles from './styles'

const useStyles = makeStyles(styles)

const Column = ({
  id: columnUuid,
  name,
  items,
  addItems,
  onRemoveColumn,
  onRemoveTask: handleRemoveTask
}) => {
  const classes = useStyles()
  const handleAddTask = (task) => addItems(task, columnUuid)
  const handleRemoveColumn = React.useCallback(() => {
    onRemoveColumn(columnUuid)
  }, [columnUuid, onRemoveColumn])

  return (
    <div className={classes.columnRoot}>
      <Typography component="h2" variant="h5" align="center" className={classes.columnTitle}>
        {name}
        <Tooltip title="Delete">
          <IconButton aria-label="delete" size="small" className={classes.columnRemove} onClick={handleRemoveColumn}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Typography>
      <div className={classes.columnInner}>
        <Droppable droppableId={columnUuid} key={columnUuid}>
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
                  key={id}
                  id={id}
                  content={content}
                  index={recordIndex}
                  columnUuid={columnUuid}
                  onRemoveTask={handleRemoveTask}
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

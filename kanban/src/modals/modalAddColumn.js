import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  MuiButton:{
    'margin-top': 37,
    'margin-left': 10,
    height: 150,
    'background-color': 'rgb(69, 108, 134)',
    color: 'white'
  }
});

export default function FormDialog(props) {
  const classes = useStyles();


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hendleAddColumn = props.addColumnProps
  const handleCloseAdd = () => {
    hendleAddColumn(inputModalAdd)
    setOpen(false);
  }

  const [inputModalAdd, setInput] = useState('')

  const addInputModal = (e) =>{
    e.preventDefault()
      const {value} = e.target
    if (value) {
        setInput( value )
    }
  }

  return (
    <div>
      <Button className={classes.MuiButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Create column!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Column tasks</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name yuor column.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="string"
            fullWidth
            onChange={(e) => addInputModal(e, hendleAddColumn)}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={ handleCloseAdd } color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

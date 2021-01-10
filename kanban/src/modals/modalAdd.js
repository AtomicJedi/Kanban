import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Headr from './../routs/header.js'

export default function FormDialog(...props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = useState()

  console.log(props)

  const addInput = (e, {...addBoard}) =>{
    console.log({addBoard})
      const {value} = e.target
    if (value) {
        setInput({ input: value })

    }
}

// function frog () {<Headr input={input} addBoard={addInput} ></Headr>}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Board!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your BOARD</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name yuor board.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="string"
            fullWidth
            onChange={addInput}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={ addInput, handleClose } color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// href="/inBoard"

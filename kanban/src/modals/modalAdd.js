import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = useState()
  console.log(input)
  const addTask = (e) =>{
      const {value} = e.target.value
    if (value) {
        setInput({ input: value })
    //   this.props.addTask(input);
     setInput({ input: '' }); 
    }
    console.log(e.target.value)

}

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
            onChange={addTask}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// href="/inBoard"

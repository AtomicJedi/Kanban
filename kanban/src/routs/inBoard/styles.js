import { createStyles } from '@material-ui/core/styles'

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },

  columnRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  columnTitle: {
    width: `calc(100% - ${theme.spacing(1 * 2)}px)`,
    margin: theme.spacing(1, 1, 0),
    position: 'relative',
  },

  columnRemove: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },

  columnInner: {
    margin: 8,
  },

  columnContent: {
    padding: 4,
    width: 250,
    minHeight: 500,
  },

  recordRoot: {
    userSelect: "none",
    padding: 16,
    margin: "0 0 8px 0",
    minHeight: "50px",
    color: "white",
    position: 'relative',
  },

  recordRemove: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  }
});

export default styles
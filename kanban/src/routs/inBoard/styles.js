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
  },
});

export default styles
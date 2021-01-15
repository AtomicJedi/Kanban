import React from "react";
import './App.sass';
import MainComponent from './mainСomponent/mainComponent.js'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({ });

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App_container">
      <MainComponent />
    </div>
  </ThemeProvider>
)

export default App;

import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStoreContextProvider } from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  HomeScreen,
  NavBar,
} from './components';
/*
	This is our application's top-level component.
    
	@author Justin Zhang
*/

let theme = createTheme({
  palette: {
    primary: {
      main: '#b6b4b4e1',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

const App = () => {

  return (
    <GlobalStoreContextProvider>
      <div style={{display: "flex",
        flexFlow:"column",
        height: "100%",
        background: "white"}}>
        <NavBar/>
        <HomeScreen/>
      </div>
    </GlobalStoreContextProvider>
  );
};

export default App;

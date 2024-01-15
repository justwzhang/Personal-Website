import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStoreContextProvider } from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AboutMe,
  Contacts,
  HomeScreen,
  NavBar,
  Projects,
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
    <BrowserRouter>
      <GlobalStoreContextProvider>
        <div style={{
          display: "flex",
          flexFlow:"column",
          height: "100%",
          background: "white"}}>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={HomeScreen}/>
            <Route path='/about' exact component={AboutMe}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/contacts' exact component={Contacts}/>
          </Switch>
        </div>
      </GlobalStoreContextProvider>
    </BrowserRouter>
  );
};

export default App;

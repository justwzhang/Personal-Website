import {AppBar, Box, Button, IconButton, Toolbar} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import GlobalStoreContext from '../../store';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
    ToolBarButtonStyle:{
        textTransform: 'none',
        maxWidth: '300px', 
        maxHeight: '30px', 
        minWidth: '30px', 
        minHeight: '30px',
    },
}

const theme = createTheme({
    palette: {
        ToolBarButton: {
          main: '#F9E4BC',
          light: '#424242',
          dark: '#424242',
          contrastText: '#424242',
      },
    },
  });


export default function NavBar(){
    const { store } = useContext(GlobalStoreContext);
    

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" sx={{ width: "100%", background: store.navBar, height:"50pt"}}>
                <div style={{height: "100%", width:"100%" }}>
                    
                    <Toolbar style={{height:"100%"}}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Button style={style.ToolBarButtonStyle} color="ToolBarButton"> <font size = "+3"><b>Justin</b></font></Button>
                            <div style={{marginLeft:"20%"}}>
                                
                            </div>
                            
                        </Box>
                        <Button style={{textTransform: 'none'}} color="ToolBarButton"> <font size = "+1"><b>About</b></font></Button>
                        <Button style={{textTransform: 'none'}} color="ToolBarButton"> <font size = "+1"><b>Projects</b></font></Button>
                        <Button style={{textTransform: 'none'}} color="ToolBarButton"> <font size = "+1"><b>Contact</b></font></Button>
                    </Toolbar>

                </div>
            </AppBar>
        </ThemeProvider>
        );
}
import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'core-js/stable';

/*
	This is our global data store. Note that it uses the Flux design pattern,
	which makes use of things like actions and reducers. 
    
*/

// THIS IS THE CONTEXT WE'LL USE TO SHARE OUR STORE
export const GlobalStoreContext = createContext({});

// THESE ARE ALL THE TYPES OF UPDATES TO OUR GLOBAL
// DATA STORE STATE THAT CAN BE PROCESSED
export const GlobalStoreActionType = {
  SET_MAP: 'SET_MAP',

};

// WITH THIS WE'RE MAKING OUR GLOBAL DATA STORE
// AVAILABLE TO THE REST OF THE APPLICATION
function GlobalStoreContextProvider(props) {
  // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
  const [store, setStore] = useState({
    primary: "#e16d17",
    // secondary:"#ea833a",
    secondary:"#f1ae7a",
    text:"#424242",
    navBar:"#424242",
    updateScroll: false,
    mapName: null,

  });
  const history = useHistory();



  // HERE'S THE DATA STORE'S REDUCER, IT MUST
  // HANDLE EVERY TYPE OF STATE CHANGE
  const storeReducer = (action) => {
    const { type, payload } = action;
    switch (type) {
      // LIST UPDATE OF ITS NAME
      case GlobalStoreActionType.SET_MAP: {
        return setStore({
          ...store,
          mapName: payload.mapName,

        });
      }
      default:
        return store;
    }
  };



  return (
    <GlobalStoreContext.Provider
      value={{
        store,
      }}
    >
      {props.children}
    </GlobalStoreContext.Provider>
  );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };
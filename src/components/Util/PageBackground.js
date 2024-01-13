
import React, { useContext, useEffect, useMemo, useState } from 'react';
import GlobalStoreContext from '../../store';

// makes the background of this website and also centers everything with margins
export default function(){
    const { store } = useContext(GlobalStoreContext);
    return(
        <div style={{width:"100%", height:"100%", background: store.secondary}}>
            {/* <div style={{width:"92%", height:"100%", marginLeft:"4%", background: store.primary}}>
           
            </div> */}
        </div>
    )
}
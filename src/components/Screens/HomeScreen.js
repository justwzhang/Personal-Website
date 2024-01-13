import React, { useContext, useEffect, useMemo, useState } from 'react';
import GlobalStoreContext from '../../store';

export default function HomeScreen(){
    const { store } = useContext(GlobalStoreContext);
    
    useEffect(()=>{
        window.addEventListener("scroll", scrollEvent);
    },[store.updateScroll]);

    function scrollEvent(e){
        // console.log(e);
        let x = 0;
        let num = window.scrollY/window.innerHeight;
        console.log(num);
        if(num <= 1) {
            document.getElementById('left').style.opacity = 1-num*2;
            x = (0-num)*100;
            document.getElementById('left').style.transform = 'translate3d('+x+'%,0%,0px)';
            console.log(document.getElementById('left').style.transform)
        } else if(num > 2 && num <= 4) {
            // document.getElementById('center').style.opacity = 2-(num);
            x = (2-num)*2;
            document.getElementById('center').style.transform = '';
        } else if(num > 4) {
            document.getElementById('right').style.opacity = (num)-4.3;
            
            //need to scale num to 50 so that it is 50 + x where x is the scaled value
            //max is 5.2 with body height:5000px
            let ratio = Math.max((5.2 - num)/(1.2), 0);
            document.getElementById('right').style.marginLeft = (50 + 50*(ratio) + "%");
            console.log(document.getElementById('right').style.marginLeft)
            
        }
    }

    return(
    <div style ={{width:"100%", background:store.secondary, position:"absoute"}}>
        <div style={{height:"100%", width:"100%", background: "red"}}>
            <div id = "left" style={{width:"50%", height:"100%", background: store.primary, position:"fixed", }}> {/** intro box */}
                <div style={{border: "15px solid black", marginTop:"10%"}}>Test</div>
            </div>
            <div id = "center" style={{width:"50%", height:"100%", background: store.secondary, marginLeft:"50%", position:"fixed"}}> {/** intro box */}
            
            </div>
            <div id = "right" style={{width:"50%", height:"100%", background: store.primary, marginLeft:"100%", position:"fixed", opacity:"0"}}>
            
            </div>
        </div>
        
        
    </div>

    );
    
}
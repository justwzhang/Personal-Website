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
        if(num <= 1) {// moves the left out of the way
            document.getElementById('left').style.opacity = 1-num*2;
            x = (0-num)*100;
            document.getElementById('left').style.transform = 'translate3d('+x+'%,0%,0px)';
            console.log(document.getElementById('left').style.transform)
        } else if(num > 1 && num <= 3) {// does the animation it needs
            document.getElementById('center').style.opacity = 2-(num);
            x = (2-num)*2;
            // document.getElementById('center').style.transform = 2-num;
        } else if(num > 3) {// moves the right into frame
            document.getElementById('right').style.opacity = (num)-3.2;
            
            //need to scale num to 50 so that it is 50 + x where x is the scaled value
            //max is 5.2 with body height:5000px
            let ratio = Math.max((5.2 - num)/(2.2), 0);
            console.log(ratio)
            document.getElementById('right').style.marginLeft = (50 + 50*(ratio) + "%");
            console.log(document.getElementById('right').style.marginLeft)
            
        }
    }

    return(
    <div style ={{width:"100%", background:store.secondary, position:"absoute"}}>
        <div style={{height:"100%", width:"100%", background: "red"}}>
            <div id = "full" style={{width:"100%", height:"100%", background: store.secondary, position:"fixed"}}> {/** info box */}
            
            </div>
            <div id = "center" style={{width:"50%", height:"100%", background: "red", marginLeft:"50%", position:"fixed"}}> {/** animation box */}
            
            </div>
            <div id = "left" style={{width:"50%", height:"100%", background: store.primary, position:"fixed", }}> {/** intro box */}

            </div>
            <div id = "right" style={{width:"50%", height:"100%", background: store.primary, marginLeft:"100%", position:"fixed", opacity:"0"}}>{/** socials box */}
            
            </div>
        </div>
        
        
    </div>

    );
    
}
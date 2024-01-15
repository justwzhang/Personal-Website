import React, { useContext, useEffect, useMemo, useState } from 'react';
import GlobalStoreContext from '../../store';



export default function HomeScreen(){
    const { store } = useContext(GlobalStoreContext);
    const style = {
        InfoBox:{
            width:"100%", 
            height:"100%", 
            background: store.secondary, 
            position:"fixed",
        },

        AnimationBox:{
            width:"50%", 
            height:"100%", 
            background: "", 
            marginLeft:"50%", 
            position:"fixed"
        },

        IntroBox:{
            width:"50%", 
            height:"100%", 
            background: store.primary, 
            // border:"6px solid black",
            position:"fixed"
        },

        IntroTextBox:{
            // border:"4px solid white", 
            height: "80%", 
            marginTop:"45%", 
            marginLeft:"50%", 
            width:"80%", 
            transform:"translate(-50%,-50%)", 
            textAllign: "center",
        },

        SocialsBox:{
            width:"50%", 
            height:"100%", 
            background: store.primary, 
            marginLeft:"100%", 
            position:"fixed", 
            opacity:"0"
        },
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollEvent);
    },[store.updateScroll]);

    //handles the event fired when scrolling
    function scrollEvent(e){
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
    <div style ={{width:"100%", background:store.secondary, marginTop:"50pt", flex: "1 1 auto"}}>
       
       <div style={{height:"100%", width:"100%", background: "red"}}>
            {/** info box */}
            <div id = "full" style={style.InfoBox}> 
                
            </div>


            {/** animation box */}
            <div id = "center" style={style.AnimationBox}> 
            
            </div>


            {/** intro box */}
            <div id = "left" style={style.IntroBox}> 
                <div style={style.IntroTextBox}>
                    <p class="RevealText" style={{}}> Hi there I am Justin <span class="RevealBox"></span></p>
                    <p class="RevealTextSecond" style={{}}> A Software Engineer based in New York.<span class="RevealBoxSecond"></span></p>
                </div>
            
            </div>


            {/** socials box */}
            <div id = "right" style={style.SocialsBox}>
            
            </div>
        </div>
        
    </div>

    );
    
}
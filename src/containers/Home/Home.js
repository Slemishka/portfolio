import React, {useEffect} from 'react';
import Main from "components/Main/Main";
import {Colors} from 'components/Colors/Colors';
import {LiquidSwipe} from "UI/Swipe/Swipe";
import toast,{Toaster} from "react-hot-toast";
import { useMediaQuery } from 'react-responsive';
import MainMobile from "../../components/Main/MainMobile/MainMobile";

const Home = () => {
    const   componentsToRender = [],
            backgroundColors = [];
    const isDesktop = useMediaQuery({query: '(min-width: 1025px)'});


    for (let i = 1; i <= 5; i++) {
        componentsToRender.push(<Main id={i} bcolor={Colors[i]["background"]} color={Colors[i]["text"]}/>);
        backgroundColors.push(Colors[i]["background"]);
    }

    useEffect(()=>{
        if (isDesktop){
            toast("Drag the arrow Icon in bottom left corner",{
                duration:6000,
            });
        }
    },[]);

    return (
        <div>
            <Toaster position={"top-right"}/>
            {isDesktop ?
                <LiquidSwipe components={componentsToRender} colors={backgroundColors}/>
                :
                <MainMobile/>
            }

        </div>
    );
};

export default Home;

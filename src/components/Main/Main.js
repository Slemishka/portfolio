import React from 'react';
import classes from './Main.module.scss';
import Skills from "./Skills/Skills";
import {ReactComponent as Art} from "./media/art.svg";
import Menu from "../Menu/Menu";
import Info from "./Info/Info";
const Main = (props) => {

    return (
        <div className={classes.Main} style={{backgroundColor:props.bcolor}}>
                <div className={classes.Content} style={{color: props.color}}>
                    <h1>Oleksandr Lemishka</h1>
                    <p>Hey, this is my portfolio,<br/>
                        here I would like to demonstrate some of my <Skills/> skills
                    </p>
                </div>
                <div className={classes.Svg}>
                    <Art width={'100%'} />
                    <Menu theme={props.color}/>
                </div>
                <Info id={props.id} color={props.color}/>
        </div>
    );
};

export default Main;

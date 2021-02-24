import React from 'react';
import classes from './Menu.module.scss';
import {NavLink} from "react-router-dom";

const Menu = props => {
    const style={color:props.theme};

    let styles = [];

    if (props.top){
        styles = [classes.Menu, classes.Top];
    }else if(props.contact){
        styles = [classes.Menu, classes.Contact]
    }else if(props.sidebar){
        styles = [classes.Sidebar]
    }else{
        styles = [classes.Menu];
    }

    const clicked = () =>{
        if (props.sidebar){
            props.clicked(false);
        }
    };

    return (
        <nav className={styles.join(' ')}>
            <ul>
                <li onClick={clicked}><NavLink to={'/'} style={style}>Home</NavLink></li>
                <li onClick={clicked}><NavLink to={'/projects'} style={style}>Projects</NavLink></li>
                <li onClick={clicked}><NavLink to={'/contact'} style={style}>Contact me</NavLink></li>
            </ul>
        </nav>
    );
};

export default Menu;

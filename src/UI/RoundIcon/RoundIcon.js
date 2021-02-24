import React,{useState} from 'react';
import Tooltip from 'react-simple-tooltip';
import classes from './RoundIcon.module.scss'

const RoundIcon = props => {

    const [bcolor,setBcolor] = useState(props.bcolor);

    const hovered = () =>{
        setBcolor(LightenDarkenColor(props.bcolor,-40));
    };
    const unhovered = () =>{
        setBcolor(props.bcolor);
    };
    const LightenDarkenColor = (col, amt) => {

        let usePound = false;

        if (col[0] === "#") {
            col = col.slice(1);
            usePound = true;
        }

        let num = parseInt(col, 16);

        let r = (num >> 16) + amt;

        if (r > 255) r = 255;
        else if  (r < 0) r = 0;

        let b = ((num >> 8) & 0x00FF) + amt;

        if (b > 255) b = 255;
        else if  (b < 0) b = 0;

        let g = (num & 0x0000FF) + amt;

        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    };


    return (
        <Tooltip content={props.name} fontSize={'15px'} padding={10}>
            <i style={{backgroundColor:bcolor}} className={classes.RoundIcon}
               onMouseEnter={hovered} onMouseLeave={unhovered}>
                {props.icon}
            </i>
        </Tooltip>
    );
};

export default RoundIcon;

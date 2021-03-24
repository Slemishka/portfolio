import React from 'react';
import {motion} from "framer-motion";
import classes from "../../../containers/Projects/Projects.module.scss";
import {VscFoldDown,VscFoldUp} from "react-icons/vsc";

const ScrollDown = props => {
    return (
            <motion.div animate={{y:[0, 20,0]}}
                        transition={{
                            duration:1,
                            ease:"easeInOut",
                            loop:Infinity,
                            repeatDelay:1
                        }} className={classes.ScrollDown} onClick={()=>props.change(props.page)}
                        style={{color:props.color}}>
                Scroll {props.up?"up":"down"}<br/>
                {props.up ?
                    <VscFoldUp/>
                    :
                    <VscFoldDown/>
                }
            </motion.div>
    );
};

export default ScrollDown;

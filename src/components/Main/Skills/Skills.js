import React,{useEffect} from 'react';
import { useDencrypt } from "use-dencrypt-effect";
import classes from './Skills.module.scss';

const Skills = () => {

    const values = ["React","SASS","HTML5","AJAX","SQL","XML","JSON","PHP","JAVA","JQuery"];
    const { result,dencrypt } = useDencrypt();

    useEffect(()=>{
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);

        return () => clearInterval(action);
    },[]);

    return (
        <div className={classes.Skills}>
            {result}
        </div>
    );
};

export default Skills;

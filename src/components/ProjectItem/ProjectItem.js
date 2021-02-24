import React from 'react';
import classes from './ProjectItem.module.scss';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useMediaQuery} from 'react-responsive';

const ProjectItem = props => {

    const openLink = () =>{
      window.open(props.link,"_blank")
    };

    const isSmallPhone = useMediaQuery({query: '(max-width: 500px)'});

    let arrows = true;
    if (isSmallPhone){
        arrows = false;
    }


    return (
        <div className={classes.ProjectItem}>
            <div  onTouchStart={()=>props.scroll(true)}
                   onTouchEnd={()=>props.scroll(false)}>
                <Carousel arrows={arrows} infinite autoPlay={3000}>
                    {props.images.map(img=>{
                        return <img src={img} alt="image" width={"100%"} height={"100%"}/>
                    })}
                </Carousel>
            </div>
            <div>
                <h2>{props.name}</h2>
                    {props.description}
                <button className={classes.Btn} onClick={openLink}>Open Project</button>
            </div>
        </div>
    );
};

export default ProjectItem;

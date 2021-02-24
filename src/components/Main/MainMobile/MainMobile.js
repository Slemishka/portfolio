import React,{useState} from 'react';
import classes from './MainMobile.module.scss';
import Skills from "../Skills/Skills";
import ReactPageScroller from "react-page-scroller";
import {Colors} from '../../Colors/Colors';
import Info from '../Info/Info';
import ScrollDown from "../../UI/ScrollDown/ScrollDown";
import {ReactComponent as Art} from "../media/art.svg";
import {ReactComponent as Programming} from "../media/programming.svg";
import {ReactComponent as Contact} from "../media/contact.svg";
import {useHistory} from 'react-router-dom';

const MainMobile = () => {
    const [currentPage,setCurrentPage] = useState(0);
    const [scrolling,setScrolling] = useState(false);

    const handlePageChange = number =>{
        setCurrentPage(number);
    };
    const handleScrolling = bool =>{
        setScrolling(bool);
    };
    const location = useHistory();
    const goToProjects = () =>{
        location.push("/projects");
    };
    const goToContact = () => {
        location.push("/contact");
    };

    return (
        <div className={classes.MainMobile} style={{backgroundColor:Colors[currentPage+1]['background']}}>
            <ReactPageScroller pageOnChange={handlePageChange}
                               customPageNumber={currentPage}
                               containerHeight={'100%'}
                                blockScrollUp={scrolling}
                                blockScrollDown={scrolling}>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <p>Hey, this is my portfolio,<br/>
                            here I would like to demonstrate some of my <Skills/> skills
                        </p>
                        <div className={classes.Art}>
                            <Art width={'100%'} height={'100%'}/>
                        </div>
                        <Info id={1} color={'black'}/>
                    </div>
                    {currentPage===0?<ScrollDown change={handlePageChange} page={1} color={'black'}/>:null}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={2} color={'white'} scroll={handleScrolling}/>
                    </div>
                    {currentPage===1?<ScrollDown change={handlePageChange} page={2} color={'white'}/>:null}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={3} color={'black'}/>
                        <div className={classes.Btn}>
                            <Programming className={classes.Image}/>
                            <button onClick={goToProjects}>Open my Projects</button>
                        </div>
                    </div>
                    {currentPage===2?<ScrollDown change={handlePageChange} page={3} color={'black'}/>:null}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={4} color={'white'}/>
                    </div>
                    {currentPage===3?<ScrollDown change={handlePageChange} page={4} color={'black'}/>:null}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={5} color={'#F28888'}/>
                        <div className={classes.Btn}>
                            <Contact className={classes.Image}/>
                            <button onClick={goToContact}>Contact me</button>
                        </div>
                    </div>
                </div>
            </ReactPageScroller>

        </div>
    );
};

export default MainMobile;

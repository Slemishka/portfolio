import React, {useState} from 'react';
import classes from "./SafariMain.module.scss";
import Skills from "../Skills/Skills";
import {ReactComponent as Art} from "../media/art.svg";
import Menu from "../../Menu/Menu";
import Info from "../Info/Info";
import ScrollDown from "../../UI/ScrollDown/ScrollDown";
import ReactPageScroller from "react-page-scroller";
import {Colors} from "../../Colors/Colors";

const SafariMain = () => {
    const [currentPage,setCurrentPage] = useState(0);
    const [scrolling,setScrolling] = useState(false);

    const handlePageChange = number =>{
        setCurrentPage(number);
    };
    const handleScrolling = bool =>{
        setScrolling(bool);
    };
console.log(currentPage);

    return (
        <div className={classes.SafariMain} style={{backgroundColor:Colors[currentPage+1]['background']}}>
            <div className={classes.Main} style={{color:Colors[currentPage+1]['text']}}>
                <h1>Oleksandr Lemishka</h1>
                <p>Hey, this is my portfolio,<br/>
                    here I would like to demonstrate some of my <Skills/> skills
                </p>
            </div>
            <div className={classes.Svg}>
                <Art width={'100%'} />
                <Menu theme={Colors[currentPage+1]['text']}/>
            </div>
            <ReactPageScroller pageOnChange={handlePageChange}
                               customPageNumber={currentPage}
                               containerHeight={'100%'}
                               blockScrollUp={scrolling}
                               blockScrollDown={scrolling}>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={1} color={'black'}/>
                    </div>
                    {currentPage===0&&<ScrollDown change={handlePageChange} page={1} color={'black'}/>}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={2} color={'white'} scroll={handleScrolling}/>
                    </div>
                    {currentPage===1&&<ScrollDown change={handlePageChange} page={2} color={'white'}/>}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={3} color={'black'}/>
                    </div>
                    {currentPage===2&&<ScrollDown change={handlePageChange} page={3} color={'black'}/>}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={4} color={'white'}/>
                    </div>
                    {currentPage===3&&<ScrollDown change={handlePageChange} page={4} color={'white'}/>}
                </div>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <Info id={5} color={'#F28888'}/>
                    </div>
                    {currentPage===4&&<ScrollDown change={handlePageChange} page={0} color={'#F28888'}/>}
                </div>
            </ReactPageScroller>
        </div>
    );
};

export default SafariMain;

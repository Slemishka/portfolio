import React,{useState} from 'react';
import classes from './Projects.module.scss';
import Menu from "components/Menu/Menu";
import ProjectItem from "components/ProjectItem/ProjectItem";

import ReactPageScroller from 'react-page-scroller';
import {denvol1,denvol2,denvol3,denvol4} from './media/import';
import {first1,first2,first3,first4} from "./media/import";
import {beer1,beer2,beer3} from "./media/import";
import {art} from './media/import';
import RoundLink from "../../UI/RoundLink/RoundLink";
import {AiOutlineGithub} from "react-icons/ai";
import ScrollDown from "../../components/UI/ScrollDown/ScrollDown";
import {useMediaQuery} from "react-responsive";

const Projects = () => {

    const [currentPage,setCurrentPage] = useState(null),
          [scrolling,setScrolling] = useState(false);

    const handlePageChange = number =>{
        setCurrentPage(number);
    };

    const handleScrolling = bool =>{
      setScrolling(bool);
    };

    const DenvolDescr = (<p>
        My latest client project for construction company.
        Web application is fully responsive and is built on <strong>React.</strong> <br/>
        Has Firebase as a media storage as well as a Database
    </p>);
    const FirstProjDescr = (<p>
        My first ever project that I have developed. <br/>
        It uses HTML, LESS, JavaScript, Jquery and Gulp.
    </p>);
    const Redesign = (<p>
        My school re-design project of existing website. I chose the "beerstore",
        because at the time they had really poorly designed and written web application.
        I wrote purely on HTML5, CSS and Vanilla JS since we couldn't use anything else.
    </p>);
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'});

    return (
        <div className={classes.Projects}>
            {isDesktop && <Menu top={true}/>}
            <ReactPageScroller pageOnChange={handlePageChange}
                               customPageNumber={currentPage}
                               containerHeight={'100%'}
                               blockScrollUp={scrolling}
                               blockScrollDown={scrolling}
            >
                <div>
                    <div className={classes.Preview}>
                        <img src={art} alt={'picture'}/>
                        <div>
                            <h2>My Projects</h2>
                            <p>
                                I make use of vast variety of latest technology tools.
                                My practice is to create the best user experience web applications
                                as well as functional back end products.
                            </p>
                            <RoundLink
                                icon={<AiOutlineGithub size={30} />}
                                href={'https://github.com/Slemishka?tab=repositories'}
                                bcolor={'black'}
                            />
                        </div>
                    </div>
                    <ScrollDown change={handlePageChange} page={1}/>
                </div>
                <ProjectItem
                    images={[denvol1,denvol2,denvol3,denvol4]}
                    link={'google.com'}
                    name={'Denvol Contracting'}
                    description={DenvolDescr}
                    scroll={handleScrolling}
                />
                <ProjectItem
                    images={[first1,first2,first3,first4]}
                    link={'https://github.com/Slemishka/main-project'}
                    name={'My First Project'}
                    description={FirstProjDescr}
                    scroll={handleScrolling}
                />
                <ProjectItem
                    images={[beer1,beer2,beer3]}
                    link={'https://github.com/Slemishka/web-design'}
                    name={'Re-design existing Web App'}
                    description={Redesign}
                    scroll={handleScrolling}
                />

            </ReactPageScroller>
        </div>
    );
};

export default Projects;

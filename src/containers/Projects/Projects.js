import React,{useState} from 'react';
import classes from './Projects.module.scss';
import Menu from "components/Menu/Menu";
import ProjectItem from "components/ProjectItem/ProjectItem";

import ReactPageScroller from 'react-page-scroller';
import {denvol1,denvol2,denvol3,denvol4} from './media/import';
import {first1,first2,first3,first4} from "./media/import";
import {beer1,beer2,beer3} from "./media/import";
import {Lamp1,Lamp2,Lamp3,Lamp4,Lamp5} from "./media/import";
import {DenvolDescr,FirstProjDescr,Redesign,Lamp} from './data';
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
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'});

    return (
        <div className={classes.Projects}>
            {isDesktop && <Menu top={true}/>}
            {currentPage===4?
                <ScrollDown change={handlePageChange} page={0} up/>:
                <ScrollDown change={handlePageChange} page={currentPage+1}/>}
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
                </div>
                <ProjectItem
                    images={[denvol1,denvol2,denvol3,denvol4]}
                    link={'https://denvolcontracting.com/'}
                    name={'Denvol Contracting'}
                    description={DenvolDescr}
                    scroll={handleScrolling}
                />
                <ProjectItem
                    images={[beer1,beer2,beer3]}
                    link={'https://github.com/Slemishka/web-design'}
                    name={'Re-design existing Web App'}
                    description={Redesign}
                    scroll={handleScrolling}
                />
                <ProjectItem
                    images={[Lamp1,Lamp2,Lamp3,Lamp4,Lamp5]}
                    link={'https://github.com/Slemishka/LAMP'}
                    name={'Final LAMP project'}
                    description={Lamp}
                    scroll={handleScrolling}
                />
                <ProjectItem
                images={[first1,first2,first3,first4]}
                link={'https://github.com/Slemishka/main-project'}
                name={'My First Project'}
                description={FirstProjDescr}
                scroll={handleScrolling}
                 />
            </ReactPageScroller>
        </div>
    );
};

export default Projects;

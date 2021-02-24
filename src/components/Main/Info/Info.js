import React,{useState} from 'react';
import classes from './Info.module.scss';
import { RiMapPinLine } from 'react-icons/ri'
import {AiOutlineHtml5,AiOutlineConsoleSql} from 'react-icons/ai';
import {FaReact,FaBootstrap,FaWordpressSimple} from 'react-icons/fa';
import {DiJavascript1,DiJqueryLogo,DiPhp,DiSass,} from 'react-icons/di';
import {SiApachecordova,SiAdobepremiere,
    SiAdobephotoshop,SiAdobexd,SiAdobeillustrator,SiRedux,SiJava} from 'react-icons/si';
import {VscJson} from 'react-icons/vsc';
import ReactMapGL,{Marker} from 'react-map-gl';
import RoundIcon from "../../../UI/RoundIcon/RoundIcon";
import Fanshawe from "../media/FanshaweLogo.png";
import MainAcad from '../media/mainAcad.png';
import Udemy from '../media/udemyLogo.png';
import Myself from '../media/myself.jpg';
import {Accordion,AccordionItem} from "react-sanfona";
import Socials from "../Socials/Socials";
import {ReactComponent as Location} from "../media/location.svg";


const Info = (props) => {
    let content = "";
    switch (props.id) {
        case 1:
            content = First();
            break;
        case 2:
            content = Second(props);
            break;
        case 3:
            content = Third();
            break;
        case 4:
            content = Fourth();
            break;
        case 5:
            content = Fifth();
            break;
    }
    return (
        <div className={classes.Info} style={{color:props.color}}>
            {content}
        </div>
    );
};


const First = () =>{
    const openResume=()=>{
        window.open('https://drive.google.com/file/d/1wJPnBmMsvoXfJjb2HqhariTku20I0Fg-/view?usp=sharing','_blank');
    };
    return (
        <div className={classes.First}>
            <h3 className={classes.Title}>About me</h3>
            <p> I am an enthusiastic and outgoing Web Developer/Designer with an aspiration
                for improvement. Very passionate about what I do, and learning to do.
                Capable of working effectively as part of a team in agile environment, as well as independently.</p>
            <div style={{textAlign:'center'}}>
               <Socials/>
                <button className={classes.Btn} onClick={openResume}>See My Resume</button>
            </div>
        </div>
    )
};
const Second = (props) =>{
    const [viewport,setViewport]=useState({
       latitude:42.932714,
       longitude: -81.228647,
       zoom: 6
    });
    const token = process.env.REACT_APP_TOKEN,
          styleURL = process.env.REACT_APP_STYLE;

    const markerStyles={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '30px',
        height: '30px',
        border: '2px solid',
        borderRadius: '0px 70% 70%',
        boxShadow: 'rgb(0 0 0) 0px 0px 2px',
        cursor: 'auto'
    };


    return (
        <div>
            <div>
                <p style={{margin:'20px auto'}}>
                    Was born and raised in Ukraine,EU. Have been perfecting my english and programming skills to enroll in
                    Canadian college on Web Development program in London, Ontario.
                </p>
            </div>
            <Location className={classes.SecondArt}/>
            <div className={classes.SecondMap}
                 onTouchStart={()=>props.scroll(true)}
                 onTouchEnd={()=>props.scroll(false)}>
                <ReactMapGL
                    {...viewport}
                    width={'100%'}
                    height={'100%'}
                    mapboxApiAccessToken={'pk.eyJ1Ijoiby1sZW1pc2hrYSIsImEiOiJja2tuMmlqZ28xamR4MnVtcW5lMmpuYjJ0In0.BlF5JXx_sqgCB4Nl1q10EQ'}
                    mapStyle={'mapbox://styles/o-lemishka/ckkn2lwzd2e3e18o206811gwf'}
                    onViewportChange={(viewport)=>setViewport(viewport)}>
                    <Marker
                        longitude={-81.228647}
                        latitude={42.932714}>
                        <div style={markerStyles}>
                            <RiMapPinLine size={20}/>
                        </div>
                    </Marker>
                    <Marker
                        longitude={25.62959146}
                        latitude={49.55508423}>
                        <div style={markerStyles}>
                            <RiMapPinLine size={20}/>
                        </div>
                    </Marker>
                </ReactMapGL>
            </div>
        </div>
    )
};
const Third = () =>{

    const icons = [
        [<AiOutlineHtml5/>,"#F23C1A","HTML5"],
        [<DiJavascript1/>,"#ffa501","JavaScript"],
        [<DiJqueryLogo/>,"#0E5197","JQuery"],
        [<FaReact/>,"#50CAEF","React"],
        [<DiPhp/>,"#5F619E","PHP"],
        [<SiApachecordova/>,"#333333","Cordova"],
        [<VscJson/>,"#000000","JSON"],
        [<AiOutlineConsoleSql/>,"#1460F0","SQL"],
        [<DiSass/>,"#BA4983","SASS"],
        [<FaBootstrap/>,"#412964","Bootstrap"],
        [<SiAdobephotoshop/>,"#021627","Photoshop"],
        [<SiAdobepremiere/>,"#C741F1","Premiere Pro"],
        [<SiAdobeillustrator/>,"#E4670B","Illustrator"],
        [<SiAdobexd/>,"#340028","XD"],
        [<SiRedux/>,"#5E30A7","Redux"],
        [<SiJava/>,"#406A8A","Java"],
        [<FaWordpressSimple/>,"black","Wordpress"]
    ];

    const content = icons.map((icon,id)=>{
        return <RoundIcon key={id} icon={icon[0]} bcolor={icon[1]} name={icon[2]}/>
    });

    return (
        <>
            <h3 className={classes.Title}>What can I work with</h3>
            <div className={classes.Languages}>
                {content}
            </div>
        </>
    )
};
const Fourth = () =>{
    const openLink =(url)=>{
        window.open(url,'_blank');
    };
    return (<>
        <h3 className={classes.Title}>Education</h3>
        <Accordion>
            <AccordionItem title={(
                <div className={classes.Diploma}>
                    <img src={Fanshawe} alt={'Fanshawe Logo'}/>
                    <small>2018-2020</small>
                    <h4>Fanshawe College</h4>
                    <strong>Internet Applications and Web Development</strong>
                </div>
            )}>
                <div className={classes.DiplomaList}>
                    <ul>
                        <li>Learnt how to configure and maintain internet services, internet application servers, database servers, and network services.</li>
                        <li>Developed internet services and web application security by applying appropriate techniques and strategies.</li>
                        <li>Created and maintained functional and dynamic websites by applying graphic and web design skills and principles.</li>
                    </ul>
                    <button onClick={()=>openLink('https://www.parchment.com/u/award/4f73981fefca3396d1cc7141cea0906f')}>Open Diploma</button>
                </div>
            </AccordionItem>
            <AccordionItem title={(
                <div className={classes.Diploma}>
                    <img src={MainAcad} alt="Main Academy Logo"/>
                    <small>2017-2018</small>
                    <h4>Main Academy</h4>
                    <strong>Front End Developer</strong>
                </div>
            )}>
                <div className={classes.DiplomaList}>
                    <ul>
                        <li>Started my journey in programming, became familiar with main programming languages.</li>
                        <li>Developed web pages via HTML5, CSS3, JavaScript and JS frameworks: JQuery, Bootstrap, Angular, React.</li>
                        <li>Gained strong knowledge of designing and recreating applications.</li>
                    </ul>
                    <button onClick={()=>openLink('https://drive.google.com/file/d/1pNBIkVQTH4KCfgeYVROejounJt9n4aT5/view?usp=sharing')}>Open Certificate</button>
                </div>
            </AccordionItem>
            <AccordionItem title={(
                <div className={classes.Diploma}>
                    <img src={Udemy} alt="Udemy Logo"/>
                    <small>2020-2021</small>
                    <h4>Udemy Java Course</h4>
                    <strong>Java Programming Masterclass</strong>
                </div>
            )}>
                <div className={classes.DiplomaList}>
                    <ul>
                        <li>Acquired essential java basics for transitioning to the Spring Framework, Java EE, Android development and more.</li>
                        <li>Learnt industry "best practices" in Java software development.</li>
                        <li>Gained the core Java skills needed to apply for Java developer position.</li>
                    </ul>
                    <button onClick={()=>openLink('https://www.udemy.com/certificate/UC-bf5af9f9-35f1-41b2-abc5-556257d79b66/')}>Open Certificate</button>
                </div>
            </AccordionItem>
            <AccordionItem title={(
                <div className={classes.Diploma}>
                    <img src={Udemy} alt="Udemy Logo"/>
                    <small>2020-2021</small>
                    <h4>Udemy React Course</h4>
                    <strong>React - The Complete Guide</strong>
                </div>
            )}>
                <div className={classes.DiplomaList}>
                    <ul>
                        <li>Built powerful, fast, user-friendly and reactive web app</li>
                        <li>Studied React Hooks & Class-based Components</li>
                        <li>Learn how to provide amazing user experiences by leveraging the power of JavaScript with ease</li>
                    </ul>
                    <button onClick={()=>openLink('https://www.udemy.com/certificate/UC-bf5af9f9-35f1-41b2-abc5-556257d79b66/')}>Open Certificate</button>
                </div>
            </AccordionItem>
        </Accordion>
    </>)
};
const Fifth = () =>{
    return (
    <div className={classes.Fifth}>
        <img src={Myself} alt="my picture"/>
        <div>
            My Goal is to improve myself along the way of learning.
            I am excited when I come across new technologies.
            You cannot learn these things overnight – but I know I am capable of putting time
            and effort into learning new skills so I can grow.
        </div>
    </div>
    )
};
export default Info;

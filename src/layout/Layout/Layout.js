import React,{useState} from 'react';
import {elastic as Sidebar} from 'react-burger-menu';
import {Styles} from './MenuStyles/styles';
import {useMediaQuery} from 'react-responsive';
import Menu from "../../components/Menu/Menu";
import Logo from "../../components/Menu/Logo/Logo";

const Layout = props => {

    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'});
    const [isOpen,setIsOpen] = useState(false);

    const closeMenu = bool =>{setIsOpen(bool);};

    return (
        <div id="outer-container">
            {!isDesktop &&
            <Sidebar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } styles={Styles}
                     isOpen={isOpen}
                     onStateChange={(state)=>setIsOpen(state.isOpen)}>
                <Logo/>
                <Menu sidebar={true} clicked={closeMenu}/>
            </Sidebar>}

            <main id="page-wrap">
                {props.children}
            </main>
        </div>
    );
};

export default Layout;

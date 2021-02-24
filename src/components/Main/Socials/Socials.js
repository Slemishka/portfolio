import React from 'react';
import RoundLink from "../../../UI/RoundLink/RoundLink";
import { AiOutlineGithub,AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import {RiFacebookFill} from 'react-icons/ri';
import {FaTelegramPlane} from 'react-icons/fa';



const Socials = () => {
    return (
        <div style={{margin:'15px 0'}}>
            <RoundLink
                icon={<AiOutlineGithub size={30} />}
                href={'https://github.com/Slemishka?tab=repositories'}
                bcolor={'black'}
            />
            <RoundLink
                icon={<AiFillLinkedin size={30}/>}
                href={'https://www.linkedin.com/in/oleksandr-lemishka/'}
                bcolor={'blue'}
            />
            <RoundLink
                icon={<RiFacebookFill size={30}/>}
                href={'https://www.facebook.com/profile.php?id=100005320806038'}
                bcolor={'#3d5a97'}
            />
            <RoundLink
                icon={<AiOutlineMail size={30}/>}
                href={'mailto:oleksandr.lemishka@gmail.com'}
                bcolor={'#ea4335'}
            />

            <RoundLink
                icon={<FaTelegramPlane size={30}/>}
                href={'https://t.me/slaggot'}
                bcolor={'#3d5a97'}
            />
        </div>
    );
};

export default Socials;

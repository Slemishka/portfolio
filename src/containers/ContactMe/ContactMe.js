import React,{useState} from 'react';
import Sky from 'react-sky';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import ReactLoading from 'react-loading';

import pic1 from "../../components/Contact/media/003-discussion.svg";
import pic2 from "../../components/Contact/media/009-conference.svg";
import pic3 from "../../components/Contact/media/018-presentation.svg";
import pic4 from "../../components/Contact/media/033-opinion.svg";
import pic5 from "../../components/Contact/media/038-laptop.svg";


import classes from './ContactMe.module.scss';
import Menu from "../../components/Menu/Menu";
import Socials from "../../components/Main/Socials/Socials";
const ContactMe = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loading,setLoading] = useState(false),
          [sent,setSent] = useState(false);

    const onSubmit = (data) =>{
        console.log(data);
        if (Object.keys(errors).length===0){
            setLoading(true);
            emailjs.send('service_n74704n','template_hlht96r',{
                from_name:data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            },'user_VfyfjWeNBsqFU1KgbTTb0').then(response=>{
                console.log(response.status+" "+response.text);
                setLoading(false);
                if (response.status===200){
                    setSent(true);
                }
            }).catch(error=>{
                console.log(error);
                setLoading(false);
            });
            document.forms[0].reset();
        }
    };
    const openResume=()=>{
      window.open('https://drive.google.com/file/d/1wJPnBmMsvoXfJjb2HqhariTku20I0Fg-/view?usp=sharing','_blank');
    };



    return (
        <div className={classes.ContactMe}>
            <Sky images={{
                0:pic1,
                1:pic2,
                2:pic3,
                3:pic4,
                4:pic5
            }}
                 how={130}
                 time={40}
                 size={'100px'}
                 background={'#091a21'}
            />

            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <h2>Contact me</h2>
                    <p>
                        I am available on almost every social media.
                        You can message me, I will reply within 24 hours.
                        I can help you with Designing and Development of your Application.
                    </p>
                    <a href="tel:5195217408">+1 (519) 521-7408</a><br/>
                    <a href="mailto:oleksandr.lemishka@gmail.com">oleksandr.lemishka@gmail.com</a>
                    <Socials/>
                    <button className={classes.Btn} onClick={openResume}>See My Resume</button>
                    <Menu contact={true}/>
                </div>
                <div className={classes.LeaveMessage}>
                    <h2>{sent? "Thanks For Your " : "Leave a "} Message</h2>
                    {errors.name && <div className={classes.Error}>Name is required</div>}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor={'name'}>Your Name</label>
                        <input type={'text'} name={'name'} id={'name'} placeholder={'Name'} ref={register({required:true})}/>

                        <label htmlFor={'phone'}>Phone</label>
                        <input type="text" name={'phone'} id={'phone'} placeholder={'Phone'} ref={register}/>

                        <label htmlFor={'email'}>Email</label>
                        <input type="text" name={'email'} id={'email'} placeholder={'Email'} ref={register}/>

                        <label htmlFor={'message'}>Message</label>
                        <textarea rows={10} name={'message'} id={'message'} placeholder={'Message'} ref={register}/>
                        <br/>
                        <button className={classes.Btn} type="submit">Submit</button>
                    </form>
                </div>


                {loading &&
                <div className={classes.Loading}>
                    <ReactLoading type={'bars'} color={'#99e6fc'}/>
                </div>}
            </div>
        </div>
    );
};

export default ContactMe;

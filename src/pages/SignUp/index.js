import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

/* MATERIAL UI/CORE/ */
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';  

/* STYLES CSS */
import { Input } from './../../common/Input';
import { stylesDesktop, stylesMobile } from './../../common/styles.css';
import './style.css';

/* POPUP GOOGLE */
import { GoogleLogin } from 'react-google-login';

import 'antd/dist/antd.css';
import { Carousel } from 'antd';

/* API BACKEND */
import api from '../../services/api';

/* ASSETS */
import imgData from './../../assets/Data.png';

/* MESSAGES */
import { openSnackbar } from './../../common/Notifier';

export default function SigIn(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorInput, setErrorInput] = useState('');

    const history = useHistory();

    const [message, setMessage] = useState({
        open: false,
        text: '',
        vertical: 'top',
        horizontal: 'center',
        type: '',
    });

    const slides = [
        {   
            src: imgData,
            alt: "Image",
            h3: "Marcenas mattis egestas",
            p: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
        },

        {   
            src: imgData,
            alt: "Image",
            h3: "Marcenas mattis egestas",
            p: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
        },

        {   
            src: imgData,
            alt: "Image",
            h3: "Marcenas mattis egestas",
            p: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
        },

        {   
            src: imgData,
            alt: "Image",
            h3: "Marcenas mattis egestas",
            p: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
        },
    ];

    const { text, vertical, horizontal, open, type } = message;

    const [style, setStyle] = useState(window.innerWidth > 1300 ? stylesDesktop : stylesMobile);

    /* FUNCTIONS */

    useEffect(() => {
        setStyle(window.innerWidth > 1300 ? stylesDesktop : stylesMobile);
    }, []);

    function handleClose(){
        setMessage({ ...message, open: false });
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    async function handleRegister(e){
        e.preventDefault();
        
        if(name === ''){
            setMessage({ ...message, text: 'Name field cannot be empty.', open: true, type: 'error' });
            setErrorInput('name');
            document.getElementById("input-name").style.color = "red";
            return;
        }

        const nameFull = name.split(' ');
        
        if(nameFull.length === 1){
            setMessage({ ...message, text: 'Enter your full name.', open: true, type: 'error' });
            setErrorInput('name');
            document.getElementById("input-name").style.color = "red";
            return;
        }

        const emailValidate = email.split('@');

        if(emailValidate.length <= 1){
            setMessage({ ...message, text: 'Invalid email!', open: true, type: 'error' });
            setErrorInput('email');
            document.getElementById("input-email").style.color = "red";
            return;
        }

        const partFinalEmailValidate = emailValidate[1].split('.');

        if(partFinalEmailValidate.length <= 1){
            setMessage({ ...message, text: 'Invalid email!', open: true, type: 'error' });
            setErrorInput('email');
            document.getElementById("input-email").style.color = "red";
            return;
        }

        if(password.length < 6){
            setMessage({ ...message, text: 'Password field cannot be less than 6 characters.', open: true, type: 'error' });
            setErrorInput('password');
            document.getElementById("input-password").style.color = "red";
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password,
        };

        try{

            const response = await api.post('signup', data);

            const created = response.data.created;

            if(created){
                openSnackbar({ msg: 'Registration completed!', tp: 'success' });
                history.push('/signin');
            }
            else{
                openSnackbar({ msg: 'Email already registered!', tp: 'error' });
            }

        }
        catch{
            openSnackbar({ msg: 'Server off.', tp: 'error' });
        }

    };

    async function handleRegisterGoogle (resp) {
        
        const emailGoogle = resp.ft.Qt;
        const nameGoogle = resp.ft.Te;

        const data = {
            name: nameGoogle,
            email: emailGoogle,
            password: '',
        };

        try{

            const response = await api.post('signup', data);

            const created = response.data.created;

            if(created){
                openSnackbar({ msg: 'Registration completed!', tp: 'success' });
                history.push('/signin');
            }
            else{
                openSnackbar({ msg: 'Email already registered!', tp: 'error' });
            }

        }
        catch{
            openSnackbar({ msg: 'Server error.', tp: 'error' });
        }

    }

    return(
        <div className="register-container" style={style.registerContainer}>

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={3000}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={type}>
                    {text}
                </Alert>
            </Snackbar>

            <div className="content-carousel" style={style.contentCarousel}>
                <Carousel className="caurosel" autoplay>

                    {
                        slides.map((item) => (
                            <div className="div">
                                <img
                                    width={window.innerWidth <= 450 ? '350px' : {}}
                                    src={item.src}
                                    alt={item.alt}
                                />

                                <section className="section" style={ window.innerWidth <= 411 ? { width: '350px'} : { width: '100%'} }>

                                    <h3 className="h3">{item.h3}</h3>

                                    <p className="p">{item.p}</p>

                                </section>
                                
                            </div>
                        ))
                    }
                </Carousel>
            </div>

            <div className="content-signup" style={style.content}>
                        
                <h1>Invision</h1>

                <div className="forms">
                    <section>

                        <h2>Getting Started</h2>

                    </section>

                    <form onSubmit={handleRegister}>

                        <Input
                            id="input-name"
                            error={errorInput}
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setErrorInput(''); }}
                        />

                        <Input
                            id="input-email"
                            error={errorInput}
                            type="email"
                            placeholder="Users name or Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrorInput(''); }}
                        />

                        <Input
                            id="input-password"
                            error={errorInput}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setErrorInput(''); }}
                        />

                        <button className="button" type="submit">Sign Up</button>

                    </form>

                    <div>  

                        <Divider className="hr"/>
                        
                        <p>Or</p>

                        <Divider  className="hr"/>
                        
                    </div>

                    <GoogleLogin
                        clientId="444381768609-3ekmns3b748g3ok6msul3b3b00enfk8k.apps.googleusercontent.com"
                        className="btnGoogle"
                        onSuccess={handleRegisterGoogle}
                        onFailure={handleRegisterGoogle}
                        cookiePolicy={'single_host_origin'}
                        children={<p>Sign up with Google</p>}
                    />

                    <p className="p">By signing up, you agree to Invision <u>Terms of Conditions</u> and <u>Privacy Policy</u></p>

                    <p><a href="/signin">Already on <b>Invision</b>? <u>Log in</u></a></p>
                </div>
            </div>
        </div>
    );
}
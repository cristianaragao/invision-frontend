import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

/* MATERIAL UI/CORE/ */
import Divider from '@material-ui/core/Divider';

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

/* LOADING */
import { showLoading } from './../../common/Loading';

export default function SigIn(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorInput, setErrorInput] = useState('');

    const history = useHistory();

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

    const [style, setStyle] = useState(window.innerWidth > 1300 ? stylesDesktop : stylesMobile);

    /* FUNCTIONS */

    useEffect(() => {
        setStyle(window.innerWidth > 1300 ? stylesDesktop : stylesMobile);
    }, []);

    async function handleRegister(e){
        e.preventDefault();
        
        if(name === ''){
            setErrorInput('name');
            openSnackbar({ msg: 'Name cannot be empty.', tp: 'error' });
            document.getElementById("input-name").style.color = "red";
            return;
        }

        const nameFull = name.split(' ');
        
        if(nameFull.length === 1){
            setErrorInput('name');
            openSnackbar({ msg: 'Enter your full name.', tp: 'error' });
            document.getElementById("input-name").style.color = "red";
            return;
        }

        if(email === ''){
            setErrorInput('email');
            openSnackbar({ msg: 'Email cannot be empty.', tp: 'error' });
            document.getElementById("input-email").style.color = "red";
            return;
        }

        const emailValidate = email.split('@');

        if(emailValidate.length <= 1){
            setErrorInput('email');
            openSnackbar({ msg: 'Invalid email!', tp: 'error' });
            document.getElementById("input-email").style.color = "red";
            return;
        }

        const partFinalEmailValidate = emailValidate[1].split('.');

        if(partFinalEmailValidate.length <= 1){
            setErrorInput('email');
            openSnackbar({ msg: 'Invalid email!', tp: 'error' });
            document.getElementById("input-email").style.color = "red";
            return;
        }

        if(password.length === 0){
            openSnackbar({ msg: 'Password cannot be empty.', tp: 'error' });
            setErrorInput('password');
            document.getElementById("input-password").style.color = "red";
            return;
        }

        if(password.length <= 6){
            openSnackbar({ msg: 'Password field cannot be less than 6 characters.', tp: 'error' });
            setErrorInput('password');
            document.getElementById("input-password").style.color = "red";
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password,
            account_google: false,
        };

        showLoading(true);

        try{

            const response = await api.post('signup', data);

            showLoading(false);

            const created = response.data.created;

            if(created){

                openSnackbar({ msg: 'Registration completed!', tp: 'success' });

                history.replace('/signin');
            }
            else{

                openSnackbar({ msg: 'Email already registered!', tp: 'error' });
                
            }

        }
        catch{

            showLoading(false);

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
            account_google: true,
        };

        showLoading(true);

        try{

            const response = await api.post('signup', data);

            showLoading(false);

            const created = response.data.created;

            if(created){

                openSnackbar({ msg: 'Registration completed!', tp: 'success' });

                history.replace('/signin');

            }
            else{         

                openSnackbar({ msg: 'Email already registered!', tp: 'error' });

            }

        }
        catch{

            showLoading(false);

            openSnackbar({ msg: 'Server off.', tp: 'error' });

        }

    }

    return(
        <div className="register-container" style={style.registerContainer}>

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
                            label="Full Name"
                            placeholder="Ex: Cristian Aragão"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setErrorInput(''); }}
                        />

                        <Input
                            id="input-email"
                            error={errorInput}
                            type="email"
                            label="Users name or Email"
                            placeholder="Ex: username@gmail.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrorInput(''); }}
                        />

                        <Input
                            id="input-password"
                            error={errorInput}
                            type="password"
                            label="Password"
                            placeholder="Ex: username123"
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
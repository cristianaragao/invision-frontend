/* REACT AND LIBRARIES */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

/* BOOTSTRAP */
import "antd/dist/antd.css";
import { Carousel } from "antd";

/* Authenticator */
import { AuthService } from "./../../routes/AuthService";

/* MATERIAL UI/CORE/ */
import Divider from "@material-ui/core/Divider";

/* STYLES CSS */
import { Input } from "./../../common/";
import { stylesDesktop, stylesMobile } from "./../../common/styles.css";
import "./style.css";

/* ROUTE URL BASE */
import { URL_BASE } from './../../routes/Routes';

/* API BACKEND */
import api from "./../../services/api";

/* POPUP GOOGLE */
import { GoogleLogin } from "react-google-login";

/* ASSETS */
import imgData from "./../../assets/Data.png";

/* MESSAGES */
import { openSnackbar } from "./../../common/Notifier";

/* LOADING */
import { showLoading } from "./../../common/Loading";

const tamMinDesktop = 1300;
const tamMinMobile = 500;


const SigIn = ( props ) => {

    /* CONSTAINTS */

    const history = useHistory();

    const [style, setStyle] = useState(window.innerWidth > 1300 ? stylesDesktop : stylesMobile);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorInput, setErrorInput] = useState("");

    useEffect(() => {
        setStyle(window.innerWidth > tamMinDesktop ? stylesDesktop : stylesMobile);
        document.getElementsByClassName("slick-dots slick-dots-bottom").style = stylesMobile.listButtonsSlide;
    }, []);

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


    /* FUNCTIONS */

    async function handleSignIn(e){
        e.preventDefault();

        const emailValidate = email.split("@");

        if(email === ""){
            openSnackbar({ msg: "Name field cannot be empty.", tp: "error" });
            setErrorInput("email");
            document.getElementById("input-email").style.color = "red";
            return;
        }

        if(emailValidate.length <= 1){
            openSnackbar({ msg: "Invalid email.", tp: "error" });
            setErrorInput("email");
            document.getElementById("input-email").style.color = "red";
            return;
        }
        
        const partFinalEmailValidate = emailValidate[1].split(".");

        if(partFinalEmailValidate.length <= 1){
            openSnackbar({ msg: "Invalid email.", tp: "error" });
            setErrorInput("email");
            document.getElementById("input-email").style.color = "red";
            return;
        }

        if(password === ""){
            openSnackbar({ msg: "Password field cannot be empty.", tp: "error" });
            setErrorInput("password");
            document.getElementById("input-password").style.color = "red";
            return;
        }

        const data = {
            email: email,
            password: password,
            account_google: false,
        };

        showLoading(true);

        try {  

            const response = await api.post("signin", data);

            showLoading(false);

            if(response.data.logged){

                openSnackbar({ msg: "Logged in!", tp: "success"});

                AuthService.signIn(response.data.user);

                history.push(`/home`);

            }
            else{

                openSnackbar({ msg: "Email or Password is incorrect!", tp: "error"});

            }

        }
        catch {

            showLoading(false);

            openSnackbar({ msg: "Server off.", tp: "error"});

        }
    };

    async function handleSignInGoogle(resp) {

        const emailGoogle = resp.ft.Qt;

        const data = {
            email: emailGoogle,
            password: "",
            account_google: true,
        };

        showLoading(true);

        try {

            const response = await api.post("signin", data);

            showLoading(false);

            if(response.data.logged){

                openSnackbar({ msg: "Logged in!", tp: "success"});

                AuthService.signIn(response.data.user);
                
                history.push(`/home`);

            }
            else{

                openSnackbar({ msg: "User without account!", tp: "error"});
                
            }

        }
        catch {

            showLoading(false);

            openSnackbar({ msg: "Server off.", tp: "error"});
        }
        
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    return(
        <div className="signin-container" style={style.registerContainer}>

            <div className="content-carousel" style={style.contentCarousel}>
                <Carousel className="caurosel" style={style.slidesCarousel} autoplay>

                    {
                        slides.map((item, index) => (
                            <div key={getRandomInt(0, 100)} className="div">
                                <img
                                    width={window.innerWidth <= tamMinMobile ? "300px" : {}}
                                    src={item.src}
                                    alt={item.alt}
                                />

                                <section className="section" style={style.section}>

                                    <h3 className="h3" style={style.p}>{item.h3}</h3>

                                    <p className="p" style={style.p}>{item.p}</p>

                                </section>
                                
                            </div>
                        ))
                    }
                </Carousel>
            </div>

            <div className="content-signin" style={style.content}>
                        
                <h1 style={style.h1}>Invision</h1>

                <div className="forms">
                    <section>

                        <h2>Welcome to Invision</h2>

                    </section>

                    <form onSubmit={handleSignIn}>

                        <Input
                            id="input-email"
                            label="Users name or Email"
                            error={errorInput}
                            type="email"
                            placeholder="Ex: username@gmail.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrorInput(""); }}
                        />

                        <Input
                            id="input-password"
                            label="Password"
                            error={errorInput}
                            type="password"
                            placeholder="Ex: username123"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setErrorInput(""); }}
                        />

                        <a href={`${URL_BASE}/signin`}>Forgot password?</a>

                        <button className="button" type="submit">Sign In</button>

                    </form>

                    <div>  

                        <Divider className="hr"/>
                        
                        <p>Or</p>

                        <Divider  className="hr"/>
                        
                    </div>

                    <GoogleLogin
                        clientId="444381768609-3ekmns3b748g3ok6msul3b3b00enfk8k.apps.googleusercontent.com"
                        className="btnGoogle"
                        onSuccess={handleSignInGoogle}
                        onFailure={handleSignInGoogle}
                        cookiePolicy={"single_host_origin"}
                        children={<p>Sign in with Google</p>}
                    />

                    <p><a href={`${URL_BASE}/signup`}>New <b>Invision</b>? <u>Create Account</u></a></p>
                </div>
            </div>
        </div>
    );
};

export default SigIn;
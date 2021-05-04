const contentFormBackground = "#FFFFFF 0% 0% no-repeat padding-box";
const contentCarouselBackground = "#A9C5BA";

export const style = {

    error: {
        color: "red",
        borderColor: "red",
    },

    normal: {
        color: "black",
        borderColor: "black",
    },

    label: {
        textAlign: "right",
        height: "3px",
        marginTop: "5px",
        color: "red",
        font: "normal normal normal 14px/18px Muli",
    },

    labelField: {
        marginTop: "20px",
        marginBottom: "5px",
        color: "#707070",
        font: "normal normal normal 14px/18px Muli",
    }

}

export const stylesDesktop = {
    registerContainer: {
        background: contentFormBackground,
        display: "flex",
        flexDirection: "row",
    },
    
    contentCarousel: {
        background: contentCarouselBackground,
        width: "50%",
    },
    
    contentSignin: {
        width: "50%",
    }
};

export const stylesMobile = {
    registerContainer: {
        background: contentFormBackground,
        display: "flex",
        flexDirection: "column",
    },
    
    contentCarousel: {
        background: contentCarouselBackground,
        width: "100%",
        height: "100vh",
    },

    slidesCarousel: {
        margin: "40px auto auto auto",
    },

    section: {
        width: "90%",
    },

    div: {
        marginTop: "10px",
    },

    h1: {
        margin: "40px 15% auto auto"
    },

    h3: {
        margin: "auto 15px",
    },

    p: {
        marginTop: "20px",
        margin: "auto 15px",
    },
    
    content: {
        width: "100%",
        margin: "auto auto",
        padding: "0 15px 0 15px",
    }
};
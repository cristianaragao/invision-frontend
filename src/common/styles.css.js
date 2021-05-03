const contentFormBackground = '#FFFFFF 0% 0% no-repeat padding-box';
const contentCarouselBackground = '#A9C5BA';

export const style = {

    error: {
        color: 'red',
        borderColor: 'red',
    },

    normal: {
        color: 'black',
        borderColor: 'black',
    },

    label: {
        textAlign: 'right',
        height: '3px',
        marginTop: '5px',
        color: 'red',
        font: 'normal normal normal 14px/18px Muli',
    },

    labelField: {
        marginTop: '20px',
        color: '#707070',
        font: 'normal normal normal 14px/18px Muli',
    }

}

export const stylesDesktop = {
    registerContainer: {
        height: '100vh',
        background: contentFormBackground,
        display: 'flex',
        flexDirection: 'row',
    },
    
    contentCarousel: {
        background: contentCarouselBackground,
        width: '50%',
    },
    
    contentSignin: {
        width: '50%',
    }
};

export const stylesMobile = {
    registerContainer: {
        background: contentFormBackground,
        display: 'flex',
        flexDirection: 'column',
    },
    
    contentCarousel: {
        background: contentCarouselBackground,
        width: '100%',
    },
    
    content: {
        width: '100%',
    }
};
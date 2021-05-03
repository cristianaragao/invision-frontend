export const AuthService = {

    user: {},

    logged: false,

    async signIn(user){

        this.user = user;

        this.logged = true;

        setTimeout(user, 100);

    },

    async signOut(cb) {

        this.user = {};

        this.logged = false;

        setTimeout(cb, 100);

    }

};

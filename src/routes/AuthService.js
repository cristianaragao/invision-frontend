export const AuthService = {

    user: {},

    logged: false,

    async signIn(user){

        console.log("user entrou: ", user);

        this.user = user;

        this.logged = true;

        setTimeout(null, 100);

    },

    async signOut() {

        this.user = {};

        this.logged = false;

        setTimeout(null, 100);

    }

};

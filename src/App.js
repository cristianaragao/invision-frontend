import "./App.css";
import React from "react";

import Routes from "./routes/Routes";

import { Notifier, Loading } from "./common/";

import { ChakraProvider } from "@chakra-ui/react";

import { AuthService } from "./routes/AuthService";

function App() {

    AuthService.signOut();

    return (
        <ChakraProvider>
            <Notifier/>
            <Loading />
            <Routes/>
        </ChakraProvider>
    );
    
}

export default App;



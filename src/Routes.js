import React from "react";
import { Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

export default class Routes extends React.Component{
    render(){
        return (
            <>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
            </>
        );
    };
}
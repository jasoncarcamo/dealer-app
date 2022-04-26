import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Route , Routes} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";

export default class App extends React.Component{
    render(){
        return (
            <Routes>
                <Route exact path="/" element={<LandingPage/>}>
                    
                </Route>
            </Routes>
        );
    };
}
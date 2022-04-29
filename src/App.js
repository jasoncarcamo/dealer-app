import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Route , Routes} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Register from './pages/Register/Register';

export default class App extends React.Component{
    render(){
        return (
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/register" element={<Register/>}/>
            </Routes>
        );
    };
}
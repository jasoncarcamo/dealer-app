import logo from './logo.svg';
import './App.css';
import React from 'react';
import TokenService from './services/TokenService';
import { Route , Routes, Navigate} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import EmployeeRoutes from './EmployeeRoutes/EmployeeRoutes';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: ""
        }
    }

    setToken = (token) => {
        this.setState({
            token
        });
    }

    RenderAuthethicatedRoutes = ()=>{
        return <Route path="/employee/*" element={<EmployeeRoutes setToken={this.setToken}/>}/>;
    }

    RenderUnautheticatedRoutes = ()=>{
        return (
            <>
                <Route exact path="/" element={!TokenService.hasToken() ? <LandingPage setToken={this.setToken}/> : <Navigate to="/employee" replace={true}/>}/>
                <Route exact path="/register" element={!TokenService.hasToken() ? <Register setToken={this.setToken}/> : <Navigate to="/"/>}/>
            </>
        );
    }

    render(){
        return (
            <Routes>
                {this.RenderUnautheticatedRoutes()}
                {TokenService.hasToken() ? this.RenderAuthethicatedRoutes() : ""}
            </Routes>
        );
    };
}
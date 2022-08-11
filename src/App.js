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

    removeToken = ()=>{
        this.setState({
            token: ""
        });
    }

    RenderAuthethicatedRoutes = ()=>{

        if(!TokenService.hasToken()){
            return <Route exact path="/*" element={<Navigate to="/"/>}/>
        }
        return <Route path="/dashboard/*" element={<EmployeeRoutes setToken={this.setToken} removeToken={this.removeToken}/>}/>;
    }

    RenderUnautheticatedRoutes = ()=>{
        return (
            <>
                <Route exact path="/" element={!TokenService.hasToken() ? <LandingPage setToken={this.setToken}/> : <Navigate to="/dashboard"/>}/>
                <Route exact path="/register" element={!TokenService.hasToken() ? <Register setToken={this.setToken}/> : <Navigate to="/dashboard"/>}/>
            </>
        );
    }

    render(){
        console.log(this.state)
        return (
            <Routes>
                {this.RenderUnautheticatedRoutes()}
                {this.RenderAuthethicatedRoutes()}
            </Routes>
        );
    };
}
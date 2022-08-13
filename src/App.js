import logo from './logo.svg';
import './App.css';
import React from 'react';
import TokenService from './services/TokenService';
import { Route , Routes, Navigate} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import EmployeeRoutes from './EmployeeRoutes/EmployeeRoutes';
import DashBoard from './pages/DashBoard/DashBoard';

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

        return <Route path="/*" element={<DashBoard/>}></Route>;
    }

    RenderUnautheticatedRoutes = ()=>{

        if(TokenService.hasToken()){
            return;
        };

        return (
            <>
                <Route exact path="/" element={!TokenService.hasToken() ? <LandingPage setToken={this.setToken}/> : <Navigate to="/dashboard"/>}/>
                <Route exact path="/register" element={<Register setToken={this.setToken}/>}/>
            </>
        );
    }

    render(){
        console.log(this.state)
        return (
            <Routes>
                {this.RenderAuthethicatedRoutes()}
                {this.RenderUnautheticatedRoutes()}
            </Routes>
        );
    };
}
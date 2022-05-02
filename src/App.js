import logo from './logo.svg';
import './App.css';
import React from 'react';
import TokenService from './services/TokenService';
import { Route , Routes, Navigate} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Register from './pages/Register/Register';
import EmployeePage from './pages/EmployeePage/EmployeePage';
import Deals from './pages/EmployeePage/Deals';

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
        return (
            <>
                <Route path="/employee" element={TokenService.hasToken() ? <EmployeePage setToken={this.setToken}/> : <Navigate to="/"/>}/>
                <Route path="/employee/deals" element={<Deals/>}/>
            </>
        )
    }

    render(){
        console.log(TokenService.getToken());
        return (
            <Routes>
                <Route exact path="/" element={!TokenService.hasToken() ? <LandingPage/> : <Navigate to="/employee" replace={true}/>}/>
                <Route exact path="/register" element={!TokenService.hasToken() ? <Register setToken={this.setToken}/> : <Navigate to="/"/>}/>
                {TokenService.hasToken() ? this.RenderAuthethicatedRoutes() : ""}
            </Routes>
        );
    };
}
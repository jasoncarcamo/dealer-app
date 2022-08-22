import logo from './logo.svg';
import './App.css';
import React from 'react';
import TokenService from './services/TokenService';
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import EmployeeRoutes from './EmployeeRoutes/EmployeeRoutes';
import DashBoard from './DashBoard/DashBoard';

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

        return <Route path="/" component={DashBoard}>
        </Route>;
    }

    RenderUnautheticatedRoutes = ()=>{

        if(TokenService.hasToken()){
            return;
        };

        return (
            <>
                <Route exact path="/" render={(props) => <LandingPage setToken={this.setToken}/>}/>
                <Route exact path="/register" render={(props) => <Register setToken={this.setToken}/>}/>
            </>
        );
    }

    render(){
        return (
            <>
                {this.RenderAuthethicatedRoutes()}
                {this.RenderUnautheticatedRoutes()}
            </>
        );
    };
}
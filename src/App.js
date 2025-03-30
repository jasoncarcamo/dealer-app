import logo from './logo.svg';
import './App.css';
import React from 'react';
import TokenService from './services/TokenService';
import { Route, Switch } from "react-router-dom";
import AppContext from './contexts/AppContext';

import Header from './DashBoard/Header/Header';
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

    static contextType = AppContext;

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

    renderAuthethicatedRoutes = ()=>{
        if(!TokenService.hasToken()){
            return;
        };

        return <Route path="/dashboard" component={DashBoard}>
        </Route>;
    }

    renderUnautheticatedRoutes = ()=>{

        return (
            <>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/register" component={Register}/>
            </>
        );
    };

    renderLoggedInRoutes = ()=>{
        return (
            <>
                <Route path="/"  component={Header}/>
                <Route path="/dashboard" component={DashBoard}/>
            </>
        );
    };

    render(){
        return (
            <main>
                {!this.context.employeeContext.employee ? this.renderUnautheticatedRoutes() : ""}
                {this.context.employeeContext.employee ? this.renderLoggedInRoutes() : ""}
            </main>
        );
    };
}
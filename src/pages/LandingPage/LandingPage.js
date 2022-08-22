import React from "react";
import AuthService from "../../services/AuthService";
import {Link} from "react-router-dom";
import TokenService from "../../services/TokenService";
import EmployeeStorage from "../../services/EmployeeStorage";
import AppContext from "../../contexts/AppContext";
import "./LandingPage.css";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            success: false,
            error: ""
        }
    }

    static contextType = AppContext;

    handleEmail = (e)=>{
        this.setState({
            email: e.target.value
        });
    }

    handlePassword = (e)=>{
        this.setState({
            password: e.target.value
        });
    }

    handleError = (err)=>{
        this.setState({
            error: err
        });
    }

    setEmployeeContext = (employee)=>{
        this.context.employeeContext.setEmployee(employee);
    }

    rerouteApp = (token)=>{
        this.props.setToken(token);
    }

    loadDeals = ()=>{
        this.context.dealsContext.checkDeals();
    }

    handleLogIn = (e)=>{
        const employee = {
            work_email: this.state.email,
            password: this.state.password
        };
        
        e.preventDefault();

        AuthService.logIn(employee)
            .then( resData => {
                const employee = resData.employee;
                const token = resData.token;

                if(resData.hasOwnProperty("error")){
                    return;
                };
                TokenService.setToken(token);
                EmployeeStorage.setEmployee(employee);
                this.setEmployeeContext(employee);
                this.loadDeals();
                
                this.props.history.push("/");
            })
            .catch(err => {
                this.handleError(err.error);
            });
    }

    render(){
        return (
            <section id="landing-page">
                <section id="login-section">
                    <form id="login-form" onSubmit={this.handleLogIn}>
                        <fieldset id="login-fieldset">
                            <legend></legend>

                            <label id="" className="login-label" htmlFor="login-email">Email:</label>
                            <input 
                            id="login-email" 
                            type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmail}/>

                            <label id="" className="login-label" htmlFor="login-password">Password:</label>
                            <input 
                            id="login-password" 
                            type="password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePassword}/>

                            <button id="login-submit">Log In</button>
                        </fieldset>

                        <p>{this.state.error ? this.state.error: ""}</p>
                    </form>

                    <p className="no-account-message">Need an account? Register <Link to="/register">here</Link></p>
                </section>
            </section>
        );
    }
}
import React from "react";
import AuthService from "../../services/AuthService";
import {Link, Navigate} from "react-router-dom";
import TokenService from "../../services/TokenService";
import EmployeeStorage from "../../services/EmployeeStorage";
import AppContext from "../../contexts/AppContext";

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

                TokenService.setToken(token);
                EmployeeStorage.setEmployee(employee);
                this.setEmployeeContext(employee);
                this.rerouteApp(token);
            })
            .catch(err => {
                console.log(err)
                this.handleError(err.error);
            });
    }

    render(){
        return (
            <section id="landing-page">
                <section>
                    <form id="login-form" onSubmit={this.handleLogIn}>
                        <fieldset id="login-fielset">
                            <legend></legend>

                            <label id="" htmlFor="login-email"></label>
                            <input 
                            id="login-email" 
                            type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmail}/>

                            <label id="" htmlFor="login-password"></label>
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

                    <p>Need an account? Register <Link to="/register">here</Link></p>
                    {this.state.success ? <Navigate to="/employee" replace={true}></Navigate> : ""}
                </section>
            </section>
        );
    }
}
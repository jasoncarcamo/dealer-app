import React from "react";
import AuthService from "../../services/AuthService";
import {Link} from "react-router-dom";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

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

    handleLogIn = (e)=>{
        const employee = {
            work_email: this.state.email,
            password: this.state.password
        };
        
        e.preventDefault();

        AuthService.logIn(employee)
            .then( resData => {
                console.log(resData);
            })
            .catch(err => {
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
                </section>
            </section>
        );
    }
}
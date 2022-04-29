import React from "react";
import AuthService from "../../services/AuthService";
import {Link} from "react-router-dom";

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            middle_name: "",
            last_name: "",
            commission_num: "",
            work_email: "",
            mobile_number: "",
            password: "",
            confirm_password: "",
            error: ""
        }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleError = (error)=>{
        this.setState({
            error
        });
    }

    handleRegister = (e)=>{
        const newEmployee = Object.assign({}, this.state);

        e.preventDefault();

        delete newEmployee.error;

        AuthService.register(newEmployee)
            .then( resData => {
                console.log(resData);
            })
            .catch(err => {
                this.handleError(err.error);
            });
    }

    render(){
        return (
            <section id="register-section">
                <form id="register-form" onSubmit={this.handleRegister}>
                    <fieldset id="register-fieldset">
                        <legend><h1>Register</h1></legend>

                        <div className="register-input-container">
                            <label id="register-first-name" className="register-label">First name:</label>
                            <input id="register-first-name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-middle-name" className="register-label">Middle name:</label>
                            <input id="register-middle-name" type="text" name="middle_name" value={this.state.middle_name} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-last-name" className="register-label">Last name:</label>
                            <input id="register-last-name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-commission" className="register-label">Commission number:</label>
                            <input id="register-commission" type="text" name="commission_num" value={this.state.commission_num} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-work-email" className="register-label">Work email:</label>
                            <input id="register-work-email" type="email" name="work_email" value={this.state.work_email} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-mobile-number" className="register-label">Mobile number</label>
                            <input id="register-mobile-number" type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-password" className="register-label">Password</label>
                            <input id="register-password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
                        </div>

                        <div className="register-input-container">
                            <label id="register-confirm-password" className="register-label">Confirm password</label>
                            <input id="register-confirm-password" type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput}/>
                        </div>

                        <button id="register-submit">Register!</button>
                    </fieldset>

                    <p>{this.state.error ? this.state.error: ""}</p>
                </form>

                <p>Already have an account? Log in <Link to="/">here</Link></p>
            </section>
        );
    };
}
import React from "react";
import "./SignOutMessage.css"
import TokenService from "../../../services/TokenService";
import EmployeeStorage from "../../../services/EmployeeStorage";
import DealsStorage from "../../../services/DealsStorage";
import AppContext from "../../../contexts/AppContext";

export default class SignOutMessage extends React.Component{
    constructor(props){
        super(props);
    };

    static contextType = AppContext;

    handleSignOut = ()=>{
        EmployeeStorage.deleteEmployee();
        this.context.employeeContext.deleteEmployee();
        DealsStorage.deleteDeals();
        TokenService.deleteToken();
        this.props.toHome();
    }

    handleCancel = ()=>{
        this.props.handleSignOutForm();
    }

    render(){
        return (
            <section id="sign-off-section">
                <h1>Are you sure you want to sign out?</h1>

                <div>
                    <button onClick={this.handleSignOut}>Yes</button>
                    <button onClick={this.handleCancel}>No</button>
                </div>
            </section>
        );
    }
}
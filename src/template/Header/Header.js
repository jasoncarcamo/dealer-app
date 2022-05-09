import React from "react";
import AppContext from "../../contexts/AppContext";
import EmployeeStorage from "../../services/EmployeeStorage";
import DealsStorage from "../../services/DealsStorage";
import TokenService from "../../services/TokenService";
import {Navigate} from "react-router-dom";

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logOut: false
        }
    }

    static contextType = AppContext;

    removeEmployee = ()=>{
        EmployeeStorage.deleteEmployee();
        this.context.employeeContext.deleteEmployee();
    }

    removeDeals = ()=>{
        DealsStorage.deleteDeals();
        this.context.dealsContext.deleteDeals();
    }

    handleLogout = ()=>{
        this.removeDeals();
        this.removeEmployee();

        TokenService.deleteToken();
        this.props.removeToken();


    }

    render(){
        return (
            <header>
                <h1>{this.context.employeeContext.employee.first_name}</h1>
                <nav>

                </nav>
                <button onClick={this.handleLogout}>Log Out</button>
            </header>
        );
    }
}
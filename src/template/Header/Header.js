import React from "react";
import AppContext from "../../contexts/AppContext";

export default class Header extends React.Component{
    static contextType = AppContext;


    render(){
        console.log(this.context)
        return (
            <header>
                <h1>{this.context.employeeContext.employee.first_name}</h1>
                <nav>

                </nav>
            </header>
        );
    }
}
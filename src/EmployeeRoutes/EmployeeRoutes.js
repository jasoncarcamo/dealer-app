import React from "react";
import {Routes, Route} from "react-router-dom";
import Template from "../template/Template";
import EmployeePage from "../pages/EmployeePage/EmployeePage";

//deals
//deal
//account

export default class EmployeeRoutes extends React.Component{
    
    render(){
        return (
            <Template>
                <Routes>
                    <Route path="/" element={<EmployeePage setToken={this.props.setToken}/>}></Route>        
                </Routes>
            </Template>
        );
    }
}
import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import Template from "../template/Template";
import EmployeePage from "../pages/EmployeePage/EmployeePage";
import DealsPage from "../pages/DealsPage/DealsPage";

//deals
//deal
//account

export default class EmployeeRoutes extends React.Component{
    
    render(){
        return (
            <Template removeToken={this.props.removeToken}>
                <Routes>
                    <Route exact path="/" element={<EmployeePage setToken={this.props.setToken}/>}></Route> 
                    <Route path="/deals" element={<DealsPage/>}></Route>       
                </Routes>
            </Template>
        );
    }
}
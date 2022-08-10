import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import Template from "../template/Template";
import DashBoard from "../pages/DashBoard/DashBoard";

//deals
//deal
//account

export default class EmployeeRoutes extends React.Component{
    
    render(){
        return (
            <Routes>
                <Route exact path="/" element={<DashBoard setToken={this.props.setToken}/>}></Route>    
            </Routes>
        );
    }
}
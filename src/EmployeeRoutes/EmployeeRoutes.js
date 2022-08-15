import React from "react";
import { Route, Outlet} from "react-router-dom";
import Template from "../template/Template";
import DashBoard from "..//DashBoard/DashBoard";

//deals
//deal
//account

export default class EmployeeRoutes extends React.Component{
    
    render(){
        return (
            <>
                <Route exact path="/" render={(props)=><DashBoard {...props} setToken={this.props.setToken}/>}></Route>    
            </>
        );
    }
}
import React from "react";
import {Link} from "react-router-dom";

export default class EmployeePage extends React.Component{
    render(){
        return (
            <section>
                <h1>Employee Page</h1>
                <Link to="/employee/deals">Deals</Link>
            </section>
        );
    };
}
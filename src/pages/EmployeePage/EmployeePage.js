import React from "react";
import {Link} from "react-router-dom";

export default class EmployeePage extends React.Component{
    render(){
        return (
            <section>
                <Link to="/employee/deals">Deal</Link>
            </section>
        );
    };
}
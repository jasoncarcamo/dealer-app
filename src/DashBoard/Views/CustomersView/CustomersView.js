import React from "react";
import DealsTable from "./DealsTable/DealsTable";
import "./CustomersView.css";

export default class CustomersView extends React.Component{
    
    render(){
        
        return (
            <section id="customers-view-section">
                <DealsTable/>
            </section>
        );
    };
}
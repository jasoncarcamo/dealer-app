import React from "react";
import DealsTable from "./DealsTable/DealsTable";

export default class CustomersView extends React.Component{
    
    render(){
        console.log(this.props);
        return (
            <section>
                <DealsTable/>
            </section>
        );
    };
}
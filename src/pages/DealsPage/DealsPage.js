import React from "react";
import DealForm from "./DealForm/DealForm";

export default class DealsPage extends React.Component{
    render(){
        return (
            <section>
                <DealForm method="POST"/>
                <h1>Deals Page</h1>
            </section>
        );
    }
}
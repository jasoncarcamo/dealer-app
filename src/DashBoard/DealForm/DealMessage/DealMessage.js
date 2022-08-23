import React from "react";
import "./DealMessage.css";

export default class DealMessage extends React.Component{

    handleConfirm = ()=>{
        this.props.toggleForm();
    }

    render(){
        return (
            <section id="deal-confirmed-section">
                <h1>Deal has been added!</h1>
                <button onClick={this.handleConfirm}>Ok</button>
            </section>
        )
    }
}
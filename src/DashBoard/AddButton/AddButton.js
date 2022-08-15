import React from "react";
import "./AddButton.css";

export default class AddButton extends React.Component{

    handleForm = ()=>{
        this.props.handleForm();
    }

    render(){
        return (
            <button id='add-button-section' onClick={this.handleForm}>
                <div id='add-button-line1'></div>
                <div id='add-button-line2'></div>
            </button>
        )
    }
}
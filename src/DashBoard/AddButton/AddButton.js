import React from "react";
import "./AddButton.css";

export default class AddButton extends React.Component{

    toggleForm = ()=>{
        this.props.toggleForm();
    }

    render(){
        return (
            <button id='add-button-section' onClick={this.toggleForm}>
                <div id='add-button-line1'></div>
                <div id='add-button-line2'></div>
            </button>
        )
    }
}
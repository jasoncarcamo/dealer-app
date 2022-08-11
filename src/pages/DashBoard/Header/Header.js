import React from "react";
import "./Header.css"

export default class Header extends React.Component{

    click = ()=>{
        console.log("Clicked");
    }

    render(){
        return (
            <header id="header-section">
                <ul id="header-list-container">
                    <li className="header-list">Home</li>
                    <li className="header-list">Customers</li>
                    <li className="header-list">Sold</li>
                    <li className="header-list">Pending</li>
                    <li className="header-list">Account</li>
                </ul>

                <button id="sign-out-button" onClick={this.click}>Sign Out</button>
            </header>
        );
    }
}
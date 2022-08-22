import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css"
import SignOutMessage from "./SignOutMessage/SignOutMessage";

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show_sign_off: false
        }
    }

    componentDidMount(){
        this.handleActiveLink();
    }

    handleActiveLink = ()=>{
        let headerLists = document.getElementsByClassName("header-list");

        Array.from(headerLists).forEach((element, index) => {
            element.addEventListener("click", e => {

                Array.from(headerLists).forEach((ele, i)=>{
                    ele.classList.remove("active-link");
                }); 
                
                e.target.classList.add("active-link");
            });
        });
    }

    handleSignOutForm = ()=>{
        this.setState({
        show_sign_off: !this.state.show_sign_off
        });
    }

    toHome = ()=>{
        this.props.history.push("/");
    }

    render(){
        return (
            <header id="header-section">

                <ul id="header-list-container">
                    <li className="header-list">
                        <NavLink exact to="/dashboard" className="header-list" activeStyle={{backgroundColor: "rgb(255, 163, 255)"}}>Home</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/customers" className="header-list" activeStyle={{backgroundColor: "rgb(255, 163, 255)"}}>Customers</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/sold" className="header-list" activeStyle={{backgroundColor: "rgb(255, 163, 255)"}}>Sold</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/pending" className="header-list" activeStyle={{backgroundColor: "rgb(255, 163, 255)"}}>Pending</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/account" className="header-list" activeStyle={{backgroundColor: "rgb(255, 163, 255)"}}>Account</NavLink>
                    </li>
                </ul>

                {this.state.show_sign_off ? <SignOutMessage toHome={this.toHome} handleSignOutForm={this.handleSignOutForm}/> : ""}

                <button id="sign-out-button" onClick={this.handleSignOutForm}>Sign Out</button>
            </header>
        );
    }
}
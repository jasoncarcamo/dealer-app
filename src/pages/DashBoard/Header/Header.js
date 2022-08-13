import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css"

export default class Header extends React.Component{

    componentDidMount(){
        this.handleActiveLink();
    }

    handleActiveLink = ()=>{
        let headerLists = document.getElementsByClassName("header-list");

        Array.from(headerLists).forEach((element, index) => {
            element.addEventListener("click", e => {

               console.log(e.target.classList.contains("header-list"));

                Array.from(headerLists).forEach((ele, i)=>{
                    ele.classList.remove("active-link");
                }); 
                
                e.target.classList.add("active-link");
            });
        });
    }

    click = ()=>{
        console.log("Clicked");
    }

    activeStyle = ()=>{
        return "active-link"
    }

    handleClassName = ({isActive})=>{
        return ["header-list", isActive ? "active-link" : null].filter(Boolean).join(" ");
    }

    render(){
        return (
            <header id="header-section">

                <ul id="header-list-container">
                    <li className="header-list">
                        <NavLink to="/" className={this.handleClassName}>Home</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/customers" className={this.handleClassName}>Customers</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/sold" className={this.handleClassName}>Sold</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/pending" className={this.handleClassName}>Pending</NavLink>
                    </li>
                    <li className="header-list">
                        <NavLink to="/account" className={this.handleClassName}>Account</NavLink>
                    </li>
                </ul>

                <button id="sign-out-button" onClick={this.click}>Sign Out</button>
            </header>
        );
    }
}
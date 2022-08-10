import React from "react";
import Header from "./Header/Header";
import "./DashBoard.css";

export default class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <section id="dashboard-section">
                <Header/>

                <section>

                </section>
            </section>
        )
    }
}
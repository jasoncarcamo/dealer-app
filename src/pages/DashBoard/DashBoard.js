import React from "react";
import Header from "./Header/Header";
import "./DashBoard.css";
import AddButton from "./AddButton/AddButton";

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

                <section id="dashboard-view-section">
                    <AddButton/>
                </section>
            </section>
        )
    }
}
import React from "react";
import Header from "./Header/Header";
import "./DashBoard.css";
import AddButton from "./AddButton/AddButton";
import DealForm from "./DealForm/DealForm";

export default class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show_form: false
        }
    }

    handleForm = ()=>{
        this.setState({
            show_form: !this.state.show_form
        });
    }

    render(){
        return (
            <section id="dashboard-section">
                <Header/>

                <section id="dashboard-view-section">

                    {this.state.show_form ? <DealForm/> : ""}

                    <AddButton handleForm={this.handleForm}/>
                </section>
            </section>
        )
    }
}
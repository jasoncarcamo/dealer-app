import React from "react";
import Header from "./Header/Header";
import { Route, Switch} from "react-router-dom";
import "./DashBoard.css";
import AddButton from "./AddButton/AddButton";
import DealForm from "./DealForm/DealForm";
import CustomersView from "./Views/CustomersView/CustomersView";

export default class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show_form: false
        }
    }
    componentDidMount(){
        console.log("Mounted");
    }

    toggleForm = ()=>{
        this.setState({
            show_form: !this.state.show_form
        });
    }

    componentDidUpdate(){
        console.log("Updated")
    }

    render(){
        console.log("Loaded")
        return (
            <section id="dashboard-section">
                <Header/>

                <section id="dashboard-view-section">

                    {this.state.show_form ? <DealForm method="POST" toggleForm={this.toggleForm}/> : ""}

                    
                    
                    <Switch>
                        <Route path="/customers" component={CustomersView}>
                            
                        </Route>
                    </Switch>

                    <AddButton toggleForm={this.toggleForm}/>
                </section>
            </section>
        )
    }
}
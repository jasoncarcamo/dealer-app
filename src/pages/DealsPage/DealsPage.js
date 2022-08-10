import React from "react";
import DealForm from "./DealForm/DealForm";
import NewDealBtn from "./NewDealBtn/NewDealBtn";
import AppContext from "../../contexts/AppContext";
import Deals from "./Deals/Deals";

export default class DealsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            createDeal: false
        }
    }

    static contextType = AppContext;

    toggleDealBtn = ()=>{
        this.setState({
            createDeal: !this.state.createDeal
        });
    }

    render(){
        return (
            <section>
                <h1>Deals Page</h1>

                <Deals/>

                {this.state.createDeal ? <DealForm method="POST" toggleDealBtn={this.toggleDealBtn}/> : ""}

                <NewDealBtn toggleDealBtn={this.toggleDealBtn}/>
            </section>
        );
    }
}
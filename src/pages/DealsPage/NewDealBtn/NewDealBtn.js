import React from "react";
import react from "react";

export default class NewDealBtn extends React.Component{

    toggleNewDeal = ()=>{
        this.props.toggleDealBtn();
    }
    render(){
        return (
            <button onClick={this.toggleNewDeal}>
                <div>Click</div>
                <div></div>
            </button>
        )
    }
}
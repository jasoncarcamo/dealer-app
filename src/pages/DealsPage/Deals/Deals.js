import React from "react";
import AppContext from "../../../contexts/AppContext";
import DealRow from "./DealRow/DealRow";
import "./Deals.css";

export default class Deals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            deals: {}
        }
    }

    static contextType = AppContext;

    componentDidMount(){
        this.setState({
            deals: this.context.dealsContext.deals
        })
    };

    renderDealHeaderRow = ()=>{
        const deal = this.context.dealsContext.defaultDeal;
        const headerRows = [];
        let index = 0;

        delete deal.id;
        delete deal.employee_id;

        for(const key of Object.keys(deal)){
            let header = key.split("_").join(" ");

            if(header.includes(" ")){
                let firstWord = header.split(" ")[0].split("");
                let secondWord = header.split(" ")[1].split("");
                
                firstWord[0] = firstWord[0].toUpperCase();
                firstWord = firstWord.join("");

                secondWord[0] = secondWord[0].toUpperCase();
                secondWord = secondWord.join("");

                header = header.split(" ");
                header[0] = firstWord;
                header[1] = secondWord;
                header = header.join(" ");

            }else{
                let firstWord = header.split("");

                firstWord[0] = firstWord[0].toUpperCase();
                firstWord = firstWord.join("");

                header = firstWord;
            };

            let headerRow = (
                <th key={index}>{header}</th>
            );

            headerRows.push(headerRow);

            index++;
        };

        return headerRows; 
    }

    renderDealRows = ()=>{
        const deals = this.context.dealsContext.deals;
        const dataRows = [];
        let index = 0;

        for(const key of Object.keys(deals)){
            const deal = deals[key];

            delete deal.id;
            delete deal.employee_id;

            dataRows.push(<DealRow key={index} deal={deal}/>);

            index++;
        };

        return dataRows;
    }

    render(){
        return (
            <table id="deals-table">
                <thead id="deals-table-header">
                    <tr>
                        {this.renderDealHeaderRow()}
                    </tr>
                </thead>

                <tbody id="deals-table-body">
                    {this.renderDealRows()}
                </tbody>
            </table>
        )
    }
}
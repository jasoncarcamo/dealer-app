import React from "react";
import AppContext from "../../../../contexts/AppContext";
import DealsLabelService from "../../../../services/DealsLabelService";
import "./DealsTable.css";

export default class DealsTable extends React.Component{

    static contextType = AppContext;

    renderHeaderRows = ()=>{
        const defaultDeal = this.context.dealsContext.defaultDeal;
        let index = 0;
        let tableLabels = [];

        for(const key of Object.keys(defaultDeal)){
            let label = DealsLabelService.turnToLabel(key);
            let tableLabel;

            if(key === "employee_id"){
                continue;
            };

            tableLabel = <th key={index} className="table-header-label">{label}</th>

            tableLabels.push(tableLabel);

            index++
        };

        return tableLabels;
    }

    render(){
        return (
            <table id="deals-table">
                <thead id="deals-table-header">
                    <tr className="deals-table-header-row">
                        {this.renderHeaderRows()}
                    </tr>
                </thead>

                <tbody id="deals-table-body">
                    {/*this.renderDealRows()*/}
                </tbody>
            </table>
        );
    }
}
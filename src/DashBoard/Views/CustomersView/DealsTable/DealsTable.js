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

            if(key === "employee_id" || key === "id"){
                continue;
            };

            tableLabel = <th key={index} className="table-header-label">{label}</th>

            tableLabels.push(tableLabel);

            index++
        };

        return tableLabels;
    }

    renderAllDeals = ()=>{
        const deals = this.context.dealsContext.deals;
        const defaultDeal = this.context.dealsContext.defaultDeal;
        let firstIndex = 0;
        let tableData = [];

        for(const dealsKey of Object.keys(deals)){
            let dataRows = [];
            let dataRow;
            let secondIndex = 0;

            for(const key of Object.keys(defaultDeal)){
                let data;
                let innerIndex = 0;

                if(key === "employee_id" || key === "id"){
                    continue;
                };

                data = <td className="deals-table-data-row" key={`${firstIndex + innerIndex + secondIndex}`}>{deals[dealsKey][key]}</td>;

                if(key.includes("arrival") || key.includes("date")){
                    data = <td className="deals-table-data-row" key={`${firstIndex + innerIndex + secondIndex}`}>{new Date(deals[dealsKey][key]).toDateString()}</td>;
                };

                dataRows.push(data);
                innerIndex++;
                secondIndex++;
            };

            dataRow = <tr className="deals-table-data-rows" key={firstIndex}>{dataRows}</tr>

            tableData.push(dataRow)
            firstIndex++;
        };

        return tableData;
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
                    {this.renderAllDeals()}
                </tbody>
            </table>
        );
    }
}
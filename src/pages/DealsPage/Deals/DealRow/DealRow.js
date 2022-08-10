import React from "react";

export default class DealRow extends React.Component{

    renderData = ()=>{
        const deal = this.props.deal;
        const tableData = [];
        let index = 0;

        for(const dealKey of Object.keys(deal)){
            const data = deal[dealKey];
            const dataRow = (
                <td key={index}>
                    {data ? data : "No"}
                </td>
            );

            tableData.push(dataRow);
            index++;
        };

        return tableData;
    }
    render(){
        return (
            <tr className="deals-table-data-row">
                {this.renderData()}
            </tr>
        )
    }
}
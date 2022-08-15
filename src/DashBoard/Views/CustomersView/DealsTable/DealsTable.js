import React from "react";
import AppContext from "../../../../contexts/AppContext";

export default class DealsTable extends React.Component{

    static contextType = AppContext;

    renderDealRows = ()=>{
        
    }

    render(){
        console.log(this.context, "Working")
        return (
            <table id="deals-table">
                Customers Table
                <thead id="deals-table-header">
                    <tr>
                        {/*this.renderDealHeaderRow()*/}
                    </tr>
                </thead>

                <tbody id="deals-table-body">
                    {/*this.renderDealRows()*/}
                </tbody>
            </table>
        );
    }
}
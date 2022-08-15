import React from "react";
import AppContext from "../../contexts/AppContext";
import DealsService from "../../services/DealsService";
import "./DealForm.css";
import DealsLabelService from "../../services/DealsLabelService";

export default class DealForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultDeal: {},
            error: ""
        }
    }

    componentDidMount(){
        this.resetDefaultDeal();
    }

    static contextType = AppContext

    resetDefaultDeal = ()=>{
        const defaultDeal = Object.assign({}, this.context.dealsContext.defaultDeal);

        this.setState({
            defaultDeal
        });
    }

    updateContextDealById = (deal)=>{
        this.context.dealsContext.updateDealById(deal, deal.id);

        this.resetDefaultDeal();
    }

    handleInput = (e)=>{
        const defaultDeal = this.state.defaultDeal;

        defaultDeal[e.target.name] = e.target.value;
    
        // checks to see if current target is a checkbox by checking if checked
        if(e.target.type === "checkbox"){
            defaultDeal[e.target.name] = e.target.checked;
        };

        if(e.target.name.includes("arrival") || e.target.name.includes("date")){
            defaultDeal[e.target.name] = new Date(defaultDeal[e.target.name]).toISOString().slice(0, 19).replace('T', ' ');
        };

        if(e.target.name.includes("year") || e.target.name.includes("deposit")){
            defaultDeal[e.target.name] = parseInt(e.target.value);
        };

        this.setState({
            defaultDeal
        });
    }

    handleForm = (e)=>{
        const method = this.props.method;
        const deal = this.state.defaultDeal;

        e.preventDefault();

        deal.employee_id = this.context.employeeContext.employee.id;

        if(method === "POST"){
            DealsService.createDeal(deal)
                .then( resData => {
                    const newDeal = resData.createdDeal;
                    
                    this.updateContextDealById(newDeal);
                })
                .catch(err => {

                });
        };

        if(method === "PATCH"){
            DealsService.updateDealById(deal, deal.id)
                .then( resData => {

                })
                .catch(err => {

                });
        };
    }

    renderInputs = ()=>{
        const defaultDeal = this.state.defaultDeal;
        let inputs = [];
        let index = 0;

        for(const key of Object.keys(defaultDeal)){
            let name = key;
            let label = DealsLabelService.turnToLabel(name);
            let nameSplit = key.split("_");
            let type = key.includes("year") || key.includes("deposit") ? "number" : "text";
            let classNameFiller = nameSplit.join("-");
            let inputContainer;
            let input = (
                <>
                    <label className={`deal-label ${classNameFiller}`} htmlFor={`deal-input-${classNameFiller}`}>{label}:</label>
                    <input id={`deal-input ${classNameFiller}`} className="deal-input" type={type} name={name} value={this.state.defaultDeal[name]} onChange={this.handleInput} placeholder={name} defaultValue={this.state.defaultDeal[name]}/>
                </>
            );
            
            if(name === "id" || name === "employee_id"){
                continue;
            };

            if(defaultDeal[name] === false || defaultDeal[name] === true){

                input =  (
                    <>
                        <label className={`deal-label ${classNameFiller}`} htmlFor={`deal-input-${classNameFiller}`}>
                            <input id={`deal-input ${classNameFiller}`} className="deal-input-check" type="checkbox" name={name} checked={this.state.defaultDeal[name]} onChange={this.handleInput} placeholder={label}/>
                            {label}:
                        </label>
                    </>
                );
            };

            if(name.includes("arrival") || name.includes("date")){
                input = (
                    <>
                        <label className={`deal-label ${classNameFiller}`} htmlFor={`deal-input-${classNameFiller}`}>{label}:</label>
                        <input id={`deal-input ${classNameFiller}`} className="deal-input-time" type="datetime-local" name={name} checked={this.state.defaultDeal[name]} onChange={this.handleInput} placeholder={label}/>
                    </>
                );
            }

            inputContainer = (
                <div className="deal-input-container" key={index}>
                    {input}
                </div>
            );

            index++;
            inputs.push(inputContainer);
        };

        return inputs;

    };


    render(){
        
        return (
            <form id="deal-form" onSubmit={this.handleForm}>
                <fieldset id="deal-fieldset">
                    <legend id="deal-legend">New Customer</legend>

                    <div className="deal-form-input-container">
                        {this.renderInputs()}
                    </div>

                    <button id="new-deal-button">Save</button>
                </fieldset>
            </form>
        );
    };
}
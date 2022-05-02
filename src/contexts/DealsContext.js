import React from "react";

const DealsContext = React.createContext({
    currentDeal: {},
    deals: {},
    getCurrentDeal: ()=>{},
    setCurrentDeal: ()=>{},
    updateCurrentDeal: ()=>{},
    removeCurrentDeal: ()=>{},
    getDeals: ()=>{},
    setDeals: ()=>{},
    updateDeals: ()=>{},
    deleteDeals: ()=>{},
    getDealById: ()=>{},
    setDealById: ()=>{},
    updateDealById: ()=>{},
    deleteDealById: ()=>{},
    handleErrror: ()=>{}
});

export default DealsContext;

export class DealsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultDeal: {
                id: "",
                type: "",
                year: "",
                make: "",
                model: "",
                trim: "",
                vin: "",
                stock_num: "",
                arrival_start: "",
                arrival_end: "",
                trade_in: false,
                trade_year: "",
                trade_make: "",
                trade_model: "",
                has_title: false,
                comments: "",
                write_up_date: "",
                deposit: "",
                employee_id: ""
            },
            currentDeal: {},
            deals: {},
            error: ""
        }
    }

    // current deal methods
    getCurrentDeal = ()=>{
        const currentDeal = this.state.currentDeal;

        return currentDeal;
    };

    setCurrentDeal = (deal)=>{
        this.setState({
            currentDeal: deal
        });
    }

    updateCurrentDeal = (updateDeal)=>{
        this.setCurrentDeal(updateDeal);
    };

    removeCurrentDeal = ()=>{
        this.setState({
            currentDeal: {}
        });
    };

    handleError = (error)=>{
        this.setState({
            error
        });
    }

    // deals methods
    getDeals = ()=>{
        const deals = this.state.deals;

        return deals;
    }

    setDeals = (newDeals)=>{
        const deals = this.state.deals;
        
        if(newDeals.length > 0){
            deals.map((deal, i)=>{
                if(!deals.hasOwnProperty(deal.id)){
                    deals[deal.id] = deal;
                };
            });
        };

        this.setState({
            deals
        });
    }

    updateDeals = (updateDeals)=>{
        this.setDeals(updateDeals);
    }

    deleteDeals = ()=>{
        this.setState({
            deals: {}
        });
    }

    //methods to interact with a deal in deals

    getDealById = (id)=>{
        const deal = this.state.deals[id];

        return deal;
    }

    setDealById = (deal, id)=>{
        const deals = this.state.deals;

        deals[id] = deal;

        this.setState({
            deals
        });
    }

    updateDealById = (updatedDeal, id)=>{
        this.setDealById(updatedDeal, id);
    }

    deleteDealById = (id)=>{
        const deals = this.state.deals;

        delete deals[id];

        this.setState({
            deals
        });
    }

    render(){
        const value = {
            currentDeal: this.state.currentDeal,
            deals: this.state.deals,
            error: this.state.error,
            getCurrentDeal: this.getCurrentDeal,
            setCurrentDeal: this.setCurrentDeal,
            updateCurrentDeal: this.updateCurrentDeal,
            removeCurrentDeal: this.removeCurrentDeal,
            getDeals: this.getDeals,
            setDeals: this.setDeals,
            updateDeals: this.updateDeals,
            deleteDeals: this.deleteDeals,
            getDealById: this.getDealById,
            setDealById: this.getDealById,
            updateDealById: this.getDealById,
            deleteDealById: this.getDealById,
            handleError: this.handleError
        };

        console.log(value);

        return (
            <DealsContext.Provider value={value}>
                {this.props.children}
            </DealsContext.Provider>
        );
    };
}
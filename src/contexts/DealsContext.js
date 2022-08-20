import React from "react";
import DealsService from "../services/DealsService";
import DealsStorage from "../services/DealsStorage";
import TokenService from "../services/TokenService";
import AppContext from "./AppContext";

const DealsContext = React.createContext({
    defaultDeal: {},
    currentDeal: {},
    deals: {},
    checkDeals: ()=>{},
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
                stock_number: "",
                trade_in: false,
                trade_year: "",
                trade_make: "",
                trade_model: "",
                has_title: false,
                comments: "",
                arrival_start: "",
                arrival_end: "",
                write_up_date: "",
                deposit: "",
                employee_id: ""
            },
            currentDeal: {},
            deals: {},
            error: ""
        }
    }

    componentDidMount(){
        this.checkDeals();
    }

    static contextType = AppContext;

    saveDeals = (deals)=>{
        DealsStorage.setDeals(deals);
    }

    checkDeals = ()=>{
        const token = TokenService.getToken();
        const deals = DealsStorage.getDeals();
        console.log(token, deals)
        if(token){
            return DealsService.getEmployeeDeals(token)
                .then(resData => {
                    const deals = resData.dbDeals;

                    this.setDeals(deals);
                })
                .catch(err=>{
                    console.log(err)
                });
        } else{
            this.setDeals(deals);
        };
    }

    getDeals = ()=>{
        const deals = this.state.deals;

        return deals;
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
        const deals = newDeals;

        this.saveDeals(deals);

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

        this.saveDeals(deals);

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
            defaultDeal: this.state.defaultDeal,
            currentDeal: this.state.currentDeal,
            deals: this.state.deals,
            error: this.state.error,
            checkDeals: this.checkDeals,
            getCurrentDeal: this.getCurrentDeal,
            setCurrentDeal: this.setCurrentDeal,
            updateCurrentDeal: this.updateCurrentDeal,
            removeCurrentDeal: this.removeCurrentDeal,
            getDeals: this.getDeals,
            setDeals: this.setDeals,
            updateDeals: this.updateDeals,
            deleteDeals: this.deleteDeals,
            getDealById: this.getDealById,
            setDealById: this.setDealById,
            updateDealById: this.updateDealById,
            deleteDealById: this.deleteDealById,
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
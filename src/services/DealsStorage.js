const DealsStorage = {
    hasDeals(){
        return this.getDeals();
    },
    getDeals(){
        return JSON.parse(localStorage.getItem("deals"));
    },
    setDeals(deals){
        return JSON.stringify(localStorage.setItem("deals", deals));
    },
    updateDeals(deals){
        return this.setDeals(deals);
    },
    deleteDeals(){
        return localStorage.removeItem("deals");
    }
};

module.exports = DealsStorage;
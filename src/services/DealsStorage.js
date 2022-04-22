const DealsStorage = {
    hasDeals(){
        return this.getDeals();
    },
    getDeals(){
        return localStorage.getItem("deals");
    },
    setDeals(deals){
        return localStorage.setItem("deals", deals);
    },
    updateDeals(deals){
        return this.setDeals(deals);
    },
    deleteDeals(){
        return localStorage.removeItem("deals");
    }
};

module.exports = DealsStorage;
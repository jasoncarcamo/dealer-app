const TokenService = require("./TokenService");

const DealsService = {
    async getAllDeals(){
        return await fetch("http://localhost:8000/api/deals", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    async getEmployeeDeals(token){
        return await fetch("http://localhost:8000/api/deals", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${token}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    async getDealById(id){
        return await fetch(`http://localhost:8000/api/deals/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify()
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    async createDeal(newDeal){
        return await fetch("http://localhost:8000/api/deals", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(newDeal)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    async updateDealById(updatedDeal, id){
        return await fetch(`http://localhost:8000/api/deals/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(updatedDeal)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    async deleteDealById(id){
    return await fetch(`http://localhost:8000/api/deals/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "authorization": `bearer ${TokenService.getToken()}`
        },
        body: JSON.stringify()
    })        
        .then( res => {
            if(!res.ok){
                return res.json().then( e => Promise.reject(e));
            };

            return res.json();
        })
    }
};

module.exports = DealsService;
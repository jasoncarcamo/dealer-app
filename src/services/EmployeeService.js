const TokenService = require("./TokenService");

const EmployeeService = {
    async getEmployeeByToken(){
        return await fetch(`http://localhost:8000/api/employee`, {
            method: "GET", 
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e));
                };

                return res.json();
            });              
    },
    async getEmployeeById(id){
        return await fetch(`http://localhost:8000/api/employee/${id}`, {
            method: "GET", 
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e));
                };

                return res.json();
            });  
    },
    async updateEmployeeBy(updatedEmployee, id){
        return await fetch(`http://localhost:8000/api/employee/${id}`, {
            method: "PATCH", 
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(updatedEmployee)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e));
                };
    
                return res.json();
            });            
    },
    async deleteEmployeeById(id){
        return await fetch(`http://localhost:8000/api/employee/${id}`, {
            method: "DELETE", 
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify()
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then(e => Promise.reject(e));
                };

                return res.json();
            })                
    }
};

module.exports = EmployeeService;
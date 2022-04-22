

const AuthService = {
    async logIn(employee){
        return await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    async register(newEmployee){
        return await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    }
};

module.exports = AuthService;
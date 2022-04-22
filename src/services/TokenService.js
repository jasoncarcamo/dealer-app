const TokenService = {
    hasToken(){
        return this.getToken();
    },
    getToken(){
        return localStorage.getItem("employee-token")
    },
    setToken(token){
        return localStorage.setItem("employee-token", token)
    },
    updateToken(token){
        return this.setToken(token);
    },
    deleteToken(){
        return localStorage.removeItem("employee-token");
    }
};

module.exports = TokenService;
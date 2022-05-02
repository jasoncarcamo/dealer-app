const EmployeeStorage = {
    isEmployeeSaved(){
        return this.getEmployeeStored();
    },
    getEmployeeStored(){
        return JSON.parse(localStorage.getItem("employee"));
    },
    setEmployee(employee){
        return localStorage.setItem("employee", JSON.stringify(employee));
    },
    updateEmployee(employee){
        return this.setEmployee(employee);
    },
    deleteEmployee(){
        return localStorage.removeItem("employee");
    }
};

module.exports = EmployeeStorage;
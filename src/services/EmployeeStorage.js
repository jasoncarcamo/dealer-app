const EmployeeStorage = {
    isEmployeeSaved(){
        return this.getEmployeeStored();
    },
    getEmployeeStored(){
        return localStorage.getItem("employee");
    },
    setEmployee(employee){
        return localStorage.setItem("employee", employee);
    },
    updateEmployee(employee){
        return this.setEmployee(employee);
    },
    deleteEmployee(){
        return localStorage.removeItem("employee");
    }
};

module.exports = EmployeeStorage;
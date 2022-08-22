import React from "react";
import TokenService from "../services/TokenService";
import EmployeeStorage from "../services/EmployeeStorage";
import EmployeeService from "../services/EmployeeService";

const EmployeeContext = React.createContext({
    employee: {},
    error: "",
    getEmployee: ()=>{},
    setEmployee: ()=>{},
    updateEmployee: ()=>{},
    deleteEmployee: ()=>{}
});

export default EmployeeContext;

export class EmployeeProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee: {},
            error: ""
        }
    }

    // check to see if token and employee is saved to local storage
    componentDidMount(){
        this.checkEmployee();
    }

    //check if employee is saved , if not get employee info
    checkEmployee = ()=>{
        const token = TokenService.getToken();
        let employee = EmployeeStorage.getEmployeeStored();
        
        if(token && !employee){
            EmployeeService.getEmployeeByToken()
                .then( dbEmployee => {
                    employee = dbEmployee;

                    EmployeeStorage.setEmployee(employee);

                    this.setEmployee(employee);
                })
                .catch( err => {
                    this.setState({
                        error: err.error
                    });
                });
        } else{
            this.setEmployee(employee);
        }
    }

    // methods to mutate our Employee state
    getEmployee = ()=>{
        return this.state.employee;
    }

    setEmployee = (employee)=>{
        this.setState({
            employee
        });
    }

    updateEmployee = (updatedEmployee)=>{
        this.setEmployee(updatedEmployee);
    }

    deleteEmployee = ()=>{
        this.setState({
            employee: {},
            error: ""
        });
    }

    handleError = (error)=>{
        this.setState({
            error
        });
    }

    render(){
        const value = {
            employee: this.state.employee,
            error: this.state.error,
            getEmployee: this.getEmployee,
            setEmployee: this.setEmployee,
            updateEmployee: this.updateEmployee,
            deleteEmployee: this.deleteEmployee
        };

        return (
            <EmployeeContext.Provider value={value}>
                {this.props.children}
            </EmployeeContext.Provider>
        )
    }
};
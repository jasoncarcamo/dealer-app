import React from "react";

const AppContext = React.createContext({
    employeeContext: {},
    dealsContext: {}
});

export default AppContext;

export class AppProvider extends React.Component{
    render(){
        const value = {
            employeeContext: this.props.employeeContext,
            dealsContext: this.props.dealsContext
        };

        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        );
    };
}
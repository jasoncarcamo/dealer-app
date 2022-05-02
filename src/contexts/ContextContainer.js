import React from "react";
import EmployeeContext, {EmployeeProvider} from "./EmployeeContext";
import DealsContext, {DealsProvider} from "./DealsContext";
import AppContext, {AppProvider} from "./AppContext";

export default class ContextContainer extends React.Component{
    render(){
        return (
            <EmployeeProvider>
                <EmployeeContext.Consumer>
                    { (employeeContext) => (
                        <DealsProvider>
                            <DealsContext.Consumer>
                                { (dealsContext)=> (
                                    <AppProvider
                                        employeeContext={employeeContext}
                                        dealsContext={dealsContext}>
                                        {this.props.children}
                                    </AppProvider>
                                )}
                            </DealsContext.Consumer>
                        </DealsProvider>
                    ) }
                </EmployeeContext.Consumer>
            </EmployeeProvider>
        );
    };
}
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default class Template extends React.Component{
    render(){
        return (
            <>
                <Header/>
                    {this.props.children}
                <Footer/>
            </>
        );
    }
}
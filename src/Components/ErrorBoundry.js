import React, {Component} from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false 
        }
    }

    componentDidCatch(erro, info){
        this.state({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops! errror loading.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
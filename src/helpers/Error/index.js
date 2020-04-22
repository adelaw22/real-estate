import { Component } from "react";

class ErrorBoundary extends Component {


    state = {
        errorMessage: ''
    };

    // Allows the error boundary a chance to update the state and thus 
    // triggering a last render
    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() }
    };

    // Used to trigger side effects.
    componentDidCatch(error, info) {
        console.log(error.toString(), info.componentStack);
    }

    render() {
        if(this.state.errorMessage) {
        return <p>{ this.state.errorMessage }</p>
        }

        return this.props.children;
    }
}
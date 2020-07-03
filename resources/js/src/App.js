import React, { Component } from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

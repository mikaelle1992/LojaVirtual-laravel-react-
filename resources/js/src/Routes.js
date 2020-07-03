import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientList from "./pages/clients/ClientList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientShow from "./pages/clients/ClientShow";
import ClientCreate from "./pages/clients/ClientCreate";

export default function Routes() {
    return (
        <BrowserRouter basename="/LojaVirtual-laravel-react-/public/">
            <Header />
            <div className="container my-5">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/clients" component={ClientList} />
                    <Route exact path="/clients/create" component={ClientCreate} />
                    <Route exact path="/clients/:id" component={ClientShow} />
                </Switch>

            </div>
            <Footer />
        </BrowserRouter>
    );
}

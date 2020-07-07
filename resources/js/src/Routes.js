import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientList from "./pages/clients/ClientList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientShow from "./pages/clients/ClientShow";
import ClientCreate from "./pages/clients/ClientCreate";
import CategoryCreate from "./pages/categories/CategoryCreate";
import CategoryList from "./pages/categories/CategoryList";
import CategoryShow from "./pages/categories/CategoryShow";
import ProducList from "./pages/products/ProductList";
import ProductCreate from "./pages/products/ProductCreate";
import ProductShow from "./pages/products/ProductShow";
import OrdersList from "./pages/Orders/OrderList";
import OrderCreate from "./pages/Orders/OrderCreate";

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
                    <Route exact path="/clients/:id/edit" component={ClientCreate} />

                    <Route exact path="/categories" component={CategoryList} />
                    <Route exact path="/categories/create" component={CategoryCreate} />
                    <Route exact path="/categories/:id" component={CategoryShow} />
                    <Route exact path="/categories/:id/edit" component={CategoryCreate} />

                    <Route exact path="/products" component={ProducList} />
                    <Route exact path="/products/create" component={ProductCreate} />
                    <Route exact path="/products/:id" component={ProductShow} />
                    <Route exact path="/products/:id/edit" component={ProductCreate} />

                    <Route exact path="/orders" component={OrdersList} />
                    <Route exact path="/orders/create" component={OrderCreate} />



                </Switch>
                
             </div>
            <Footer />
        </BrowserRouter>
    );
}

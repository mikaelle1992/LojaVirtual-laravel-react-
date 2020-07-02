import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import ClientList from './pages/clients/ClientList';
import Header from './components/Header';
import Footer from './components/Footer';
import ClientShow from './pages/clients/ClientShow';
import ClientCreate from './pages/clients/ClientCreate';


export default function Routes (){
    return (
        <BrowserRouter basename="/projetoLaravel/projectLaraDev/public">
            <>
            <Header/>
            <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/clients/:id"  component={ClientShow} />
            <Route path="/clients"  component={ClientList} />
            <Route path="/clients/create"  component={ClientCreate} />
            </Switch>
            <Footer/>
            </>

        </BrowserRouter>
    );
}
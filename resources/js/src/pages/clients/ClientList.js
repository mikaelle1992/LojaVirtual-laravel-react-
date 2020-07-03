import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClientService from "../../services/ClientService";

export default class ClientList extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.service = new ClientService();
    }
    async getClients() {
        const data = await this.service.getAll();
        console.log(data);
        this.setState({
            clients: data.data
        });
    }
    deleteItem(id){
        this.service
            .delete(id)
            .then(response => this.getClients())
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.getClients();
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Lista de clientes</h2>
                </div>
                <div className="card-body">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col" className="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clients.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td className="text-center">
                                        <Link to={"/clients/" + item.id}>
                                            <button className="btn btn-warning">Detalhar</button>
                                        </Link>
                                        <Link to={"/clients/" + item.id + "/edit"}>
                                            <button className="btn btn-primary ml-2">Editar</button>
                                        </Link>
                                        <button className="btn btn-danger ml-2" onClick={() => this.deleteItem(item.id)}>Deletar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <Link to="/clients/create">
                        <button className="btn btn-primary">Cadastrar</button>
                    </Link>
                </div>
            </div>
        );
    }
}

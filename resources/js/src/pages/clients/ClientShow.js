import React, { Component } from "react";
import ClientService from "../../services/ClientService";
import { Link } from "react-router-dom";

export default class ClientShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: null,
            id: props.match.params.id
        };
        this.service = new ClientService();
    }
    async getClient(id) {
        const response = await this.service.getOne(id);
        this.setState({
            client: response.data
        });
    }
    componentWillMount() {
        this.getClient(this.state.id);
    }

    render() {
        return (
            <div className="">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.client ? (
                            <tr>
                                <th scope="row">{this.state.client.id}</th>
                                <td>{this.state.client.name}</td>
                                <td>{this.state.client.email}</td>
                                <td></td>
                            </tr>
                        ) : (
                            <tr>
                                <td>Cliente não encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link to="/clients" className="ml-2">
                    <button type="button" className="btn btn-primary">Voltar</button>
                </Link>
            </div>
        );
    }
}

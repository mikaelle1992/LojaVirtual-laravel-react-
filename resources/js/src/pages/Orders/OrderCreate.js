import React, { Component } from "react";
import OrderService from "../../services/OrderService";
import { Link } from "react-router-dom";
import ClientList from "../clients/ClientList";
import ClientService from "../../services/ClientService";


export default class OrderCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            client_id: "",
            total: "",
            status: "",
            clients: []
        };
        
        this.clientService = new ClientService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.service = new OrderService();
    }

    async handleSubmit(event) {
        event.preventDefault();
        var result
        var data = {
            client_id: this.state.client_id,
            total: this.state.total,
            status: this.state.status,
        };
        if (this.state.id) {
            result = await this.service.update(this.state.id);
        } else {
            result = await this.service.store(data);
        }
        if (result) {
            this.props.history.push("/orders");

        }
    }
    async getOrder(id) {
        const order = await this.service.getOne(id);
        this.setState({
            client_id: order.client_id,
            total: order.total,
        });
    }
    async getClients(){
        const data = await this.clientService.getAll();
        this.setState({
            clients: data
        });
    }
    componentWillMount() {
        if (this.state.id) {
            this.getOrder(this.state.id);
        }
        this.getClients();
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastrar Pedidos</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Nome do Clientes</label>
                            <select
                                onChange={event =>
                                    this.setState({ client_id: event.target.value })
                                }
                                //value={this.state.client_id}
                                className="form-control"
                            >
                                {this.state.clients.map(item => (
                                    <option key ={item.id} value={item.id} >
                                      {item.name}
                                  </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Total</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ total: event.target.value })
                                }
                                value={this.state.total}
                                className="form-control"
                                placeholder="Valor do produto"
                            />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ status: event.target.value })
                                }
                                value={this.state.status}
                                className="form-control"
                                placeholder="Valor do produto"
                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            {this.state.id ? 'Atualizar' : 'Cadastrar'}
                        </button>

                        <Link to="/orders" className="ml-2">
                            <button type="button" className="btn btn-primary">
                                Voltar
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }

}
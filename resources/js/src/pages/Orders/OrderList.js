import React, { Component } from "react";
import OrderService from "../../services/OrderService";
import { Link } from "react-router-dom";

export default class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            orders: []
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.service = new OrderService();
    }
    async getOrders() {
        const data = await this.service.getAll();
        console.log(data);
        this.setState({
            orders: data
        });
    }
    async deleteItem(id) {
        const data = await this.service.delete(id);
        this.getOrders();
    }
    componentDidMount() {
        this.getOrders();
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Lista de Pedidos</h2>
                </div>
                <div className="card-body">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Clientes</th>
                                <th scope="col">total</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.client_id}</td>
                                    <td>{item.total}</td>
                                    <td>{item.status}</td>
                                    <td className="text-center">
                                        <Link to={"/orders/" + item.id}>
                                            <button className="btn btn-warning">Detalhar</button>
                                        </Link>
                                        <Link to={"/orders/" + item.id + "/edit"}>
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
                    <Link to="/orders/create">
                        <button className="btn btn-primary">Cadastrar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
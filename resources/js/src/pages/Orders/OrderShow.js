import React, { Component } from "react";
import OrderService from "../../services/OrderService";
import { Link } from "react-router-dom";


export default class OrderShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: null,
            id: props.match.params.id
        };
        this.service = new OrderService();
    }

    async getOrder(id) {
        const data = await this.service.getOne(id);
        this.setState({
            order:data
        });
    }
    componentWillMount() {
        this.getOrder(this.state.id);
    }

    render(){
        return (
           <div className="">
                 <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nome do cliente</th>
                            <th scope="col">total</th>
                            <th scope="col">Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.order ? (
                            <tr>
                                <th scope="row">{this.state.order.id}</th>
                                <td>{this.state.order.client_id}</td>
                                <td>{this.state.order.total}</td>
                                <td>{this.state.order.status}</td>
                            </tr>
                        ) : (
                                <tr>
                                    <td> pedido não encontrado</td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <Link to="/orders" className="ml-2">
                    <button type="button" className="btn btn-primary">Voltar</button>
                </Link>
          </div> 
        );

    }
}
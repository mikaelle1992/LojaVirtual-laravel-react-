import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.service = new ProductService();

    }
    async getProducts() {
        const data = await this.service.getAll();
        
        this.setState({
            products: data
        });
    }
    async deleteItem(id) {
        const data = await this.service.delete(id);
        this.getProducts();
    }

    componentDidMount() {
        this.getProducts();
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Lista de Produtos</h2>
                </div>
                <div className="card-body">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.value}</td>
                                    <td>{item.description}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.user_id}</td>
                                    <td>{item.status =="active" ? "disponivel" : "indisponivel"}</td>
                                    <td className="text-center">
                                        <Link to={"/products/" + item.id}>
                                            <button className="btn btn-warning">Detalhar</button>
                                        </Link>
                                        <Link to={"/products/" + item.id + "/edit"}>
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
                    <Link to="/products/create">
                        <button className="btn btn-primary">Cadastrar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
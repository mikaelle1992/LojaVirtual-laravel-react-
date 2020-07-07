import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryService";


export default class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            categories:[]
        }
        this.deleteItem= this.deleteItem.bind(this);
        this.service = new CategoryService();
    }
    async getCategories() {
        const data = await this.service.getAll();
        console.log(data);
        this.setState({
            categories: data
        });
    }
    async deleteItem(id) {
        const data = await this.service.delete(id);
        this.getCategories();
    }
    componentDidMount() {
        this.getCategories();
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Lista Categorias</h2>
                </div>
                <div className="card-body">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td className="text-center">
                                    <Link to={"/categories/"+ item.id}>
                                        <button className="btn btn-warning">Detalhar</button>
                                    </Link>
                                    <Link to={"/categories/"+ item.id +"/edit"}>
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
                    <Link to={"categories/create"}>
                        <button className="btn btn-primary">Cadastrar</button>
                    </Link>
                </div>
            </div>
        );
    }
}
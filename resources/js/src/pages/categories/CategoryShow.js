import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import { Link } from "react-router-dom";

export default class CategoryShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: null,
            id: props.match.params.id
        };
        this.service = new CategoryService();
    }
    async getCategory(id) {
        const data = await this.service.getOne(id);
        this.setState({
            category: data
        });
    }
    componentWillMount() {
        this.getCategory(this.state.id);
    }
    render() {
        return (
            <div className="">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.category ? (
                            <tr>
                                <th scope="row">{this.state.category.id}</th>
                                <td>{this.state.category.name}</td>
                                <td>{this.state.category.description}</td>

                            </tr>
                        ) : (
                                <tr>
                                    <td>Catgoria nao encontrada</td>
                                </tr>
                            )}
                    </tbody>
                </table>
                <Link to="/categories" className="ml-2">
                    <button type="button" className="btn btn-primary">Voltar</button>
                </Link>

            </div>
        );
    }
}
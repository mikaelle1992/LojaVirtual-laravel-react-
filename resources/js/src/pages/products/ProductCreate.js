import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";

export default class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            name: "",
            value: "",
            description: "",
            category_id: "",
            user_id: "",
            status: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.service = new ProductService();
    }
    async handleSubmit(event) {
        event.preventDefault();
         var result;
        var data = {
            name: this.state.name,
            value: this.state.value,
            description: this.state.description,
            category_id: this.state.category_id,
            user_id: this.state.user_id,
            status: this.state.status
        };
        if (this.state.id) {
            result = await this.service.update(this.state.id, data);
        } else {
            result = await this.service.store(data);
        }
        if (result) {
            this.props.history.push("/products");
        }
    }
    async getProduct(id) {
        const product = await this.service.getOne(id);
        this.setState({
            name: product.name,
            value: product.value,
            description: product.description,
            category_id: product.category_id,
            user_id: product.user_id,
            status: product.status,
        });
    }
    componentWillMount() {
        if (this.state.id) {
            this.getProduct(this.state.id);
        }
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastrar Produto</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ name: event.target.value })
                                }
                                value={this.state.name}
                                className="form-control"
                                placeholder="Nome do Produto"
                            />
                        </div>
                        <div className="form-group">
                            <label>Valor</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ value: event.target.value })
                                }
                                value={this.state.value}
                                className="form-control"
                                placeholder="Valor do produto"
                            />
                        </div>
                        <div className="form-group">
                            <label>Descrição</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ description: event.target.value })
                                }
                                value={this.state.description}
                                className="form-control"
                                placeholder="Descrição do produto"
                            />
                        </div>
                        <div className="form-group">
                            <label>categoria</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ category_id: event.target.value })
                                }
                                value={this.state.category_id}
                                className="form-control"
                               placeholder="Categoria do produto"
                            />
                        </div>
                        <div className="form-group">
                            <label>Usuário</label>
                            <input
                                type="text"
                                onChange={event =>
                                    this.setState({ user_id: event.target.value })
                                }
                                value={this.state.user_id}
                                className="form-control"
                                placeholder="Usuário do Produto"
                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            {this.state.id ? 'Atualizar' : 'Cadastrar'}
                        </button>

                        <Link to="/products" className="ml-2">
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
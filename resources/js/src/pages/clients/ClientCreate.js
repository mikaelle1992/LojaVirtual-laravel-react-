import React, { Component } from "react";
import ClientService from "../../services/ClientService";
import { Link } from "react-router-dom";

export default class ClientCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.service = new ClientService();
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        if(this.state.id){ // atualizar
            this.service
                .update(this.state.id, data)
                .then(response =>  this.props.history.push("/clients"))
                .catch(e => console.log(e));
        }else { /// cadastar
            this.service
                .store(data)
                .then(response => {
                    this.props.history.push("/clients");
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    getClient(id) {
        this.service
            .getOne(id)
            .then(response => {
                const client = response.data;
                this.setState({
                    name: client.name,
                    email: client.email,
                    password: client.password,
                });
            })
            .catch(e => console.log(e));
    }

    componentWillMount() {
        if (this.state.id) {
            this.getClient(this.state.id);
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastrar Cliente</h2>
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
                                placeholder="Nome do cliente"
                            />
                        </div>
                        <div className="form-group">
                            <label>Endereço de email</label>
                            <input
                                type="email"
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                                value={this.state.email}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input
                                type="password"
                                onChange={e =>
                                    this.setState({ password: e.target.value })
                                }
                                value={this.state.password}
                                className="form-control"
                                placeholder="Senha do cliente"
                            />
                        </div>

                        <button type="submit" className="btn btn-success">
                            {this.state.id ? 'Atualizar' :  'Cadastrar' }
                        </button>

                        <Link to="/clients" className="ml-2">
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

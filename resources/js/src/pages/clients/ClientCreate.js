import React, { Component } from "react";
import api from "../../services/api";
import ClientService from "../../services/ClientService";

export default class ClientCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            password: this.state.password,
          };

          this.service.store(data)
        .then(response => {
            this.props.history.push('/clients')
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            onChange={e =>
                                this.setState({ name: e.target.value })
                            }
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
                            className="form-control"

                            placeholder="Senha do cliente"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Cadastrar
                    </button>
                </form>
            </div>
        );
    }
}

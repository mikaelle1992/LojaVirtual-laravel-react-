import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import { Link } from "react-router-dom";



export default class CategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            name: "",
            description: ""
           
        };
         this.handleSubmit = this.handleSubmit.bind(this);
         this.service = new CategoryService();
    }

    async handleSubmit(event){
        event.preventDefault();
        var result;
        var data = {
            name: this.state.name,
            description: this.state.description
        };
        if(this.state.id){//atualizar*
            result = await this.service.update(this.state.id, data);
        }else{
            result = await this.service.store(data);
        }
        if(result){
            this.props.history.push("/categories");
        }
    }
    
    async getCategory(id){
        const category = await this.service.getOne(id);
        this.setState({
            name: category.name,
            discription: category.description,
        });
    }

    componentWillMount(){
        if(this.state.id){
            this.getCategory(this.state.id);
        }
    }

    render() {
        return(
        <div className="card">
            <div className="card-header">
                <h2>Cadastrar Categoria</h2>
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
                            placeholder="Nome da categoria"
                        />
                    </div>
                    <div className="form-group">
                        <label>Discrição</label>
                        <input
                            type="text"
                            onChange={event =>
                                this.setState({ description: event.target.value })
                            }
                            value={this.state.description}
                            className="form-control"
                            placeholder="Descrição da categoria"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        {this.state.id ? 'Atualizar' : 'Cadastrar'}
                    </button>

                    <Link to="/categories" className="ml-2">
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
import { Component } from "react";
import ProductService from "../../services/ProductService";


export default class ProductShow extends Component{
    constructor(props){
        super(props);
        this.state = {
            product : null,
            id:props.match.params.id
        };
        this.service = new ProductService();
    }

    async getProduct(id){
        const data = await this.service.getOne();
        this.setState({
            product:data
        });
    }
    componentWillMount(){
        this.getProduct(this.state.id);
    }
    render(){
        return (
            <div className="">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">User</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.product ? (
                            <tr>
                                <th scope="row">{this.state.product.id}</th>
                                <td>{this.state.product.name}</td>
                                <td>{this.state.product.value}</td>
                                <td>{this.state.product.description}</td>
                                <td>{this.state.product.category_id}</td>
                                <td>{this.state.product.user_id}</td>
                                <td>{this.state.product.status}</td>
                                
                            </tr>
                        ) : (
                            <tr>
                                <td> Produto não encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Link to="/products" className="ml-2">
                    <button type="button" className="btn btn-primary">Voltar</button>
                </Link>
            </div>
        );
    }
}
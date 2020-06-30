import React , {Component} from 'react';
import api from '../../services/api';

export default class ClientShow extends Component{
    constructor(props){
        super(props);
        this.state = { 
            client: null ,
             id: props.match.params.id

        }
    }
     async getClient(id){
         const data = await api.get('/clients/'+id);
         console.log(data);
         this.setState({
             client: data.data
         })

     }
    componentWillMount(){
        this.getClient(this.state.id);
    }
    
    render(){
        return(
            <div className="container my-5" >
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.client ? (
                                <tr>
                                    <th scope="row">{this.state.client.id}</th>
                                    <td>{this.state.client.name}</td>
                                    <td>{this.state.client.email}</td>
                                    <td></td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>Cliente não encontrado</td>
                                </tr>
                            )}
                        
                    </tbody>
                </table>

            </div>
        );
    }
}
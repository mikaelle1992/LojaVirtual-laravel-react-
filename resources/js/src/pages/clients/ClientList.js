import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import ClientService from '../../services/ClientService';

export default class ClientList extends Component{
    constructor(){
        super();
        this.state = {
            clients: []
        }

        this.service = new ClientService();
    }
     async getClients(){
         const data = await this.service.getAll();
         console.log(data);
         this.setState({
             clients: data.data
         })

     }
    componentDidMount(){
        this.getClients();
    }
    render(){
        return(
         <div className = "">
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
                        {this.state.clients.map( item => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Link to={'/clients/'+item.id}>Detalhar</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            );
    }
}

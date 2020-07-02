  import React , {Component} from 'react';
  import api from '../../services/api';
  

  export default class ClientCreate extends Component{
      constructor(props){
          super(props);
          this.state = { 
              client:null,
              name:'',
              email:'',
              password:''
            };
          }

          handleSubmit(event){
            event.preventDefault();
          }

          async getClient(){
              const data = await api.get('/clients');
              console.log(data);
              this.setState({
                  client: data.data
              })
            }
       
         componentDidMount(){
         
        }
     
     
      render(){
          return(
          <form>
            <div className="form-group">
              <label >Name</label>
              <input type="text" onChange={e => this.setState({name: e.target.value})} className="form-control" id="exampleName" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label >Email address</label>
              <input type="email" onChange={e => this.setState({email: e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" onChange={e => this.setState({password: e.target.value})} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" >Check me out</label>
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
                    
              );
        }
    }

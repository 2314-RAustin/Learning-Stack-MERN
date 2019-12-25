import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users:[],
        username: ''
    };

     componentDidMount = async () =>{
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.users});
        //Pull Request al repositorio de fazt https://github.com/FaztWeb/mern-crud-2019
        //video 10 https://youtu.be/-LB0N_EO7X0?list=PLo5lAe9kQrwrGPjhhzejCt3JENYf5uDNf
    };
    
    onChangeUserName = (e) => {
        this.setState({username: e.target.value}); 
    };
    
     onSubmitUserName = async e  => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.componentDidMount();
        this.state.username = '';
        
    };

    deleteUser = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        this.componentDidMount();
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create new user</h3>
                        <form action="" onSubmit={this.onSubmitUserName}>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUserName}/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                    {
                        this.state.users.map(user => (
                            <li 
                                key={user._id} 
                                onDoubleClick={() => this.deleteUser(user._id)} 
                                className="list-group-item list-group-item-action">
                                {user.username}
                            </li>))
                    }
                    </ul>
                </div>
            </div>
        );
    };
};
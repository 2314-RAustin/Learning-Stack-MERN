import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

//TODO AL MOMENTO DE HACER EL SUBMIT SIN CAMBIAR EL USER ESTE SE VA VACIO


export default class CreateNote extends Component {

    state = {
        users:[],
        userSelected: '',
        date: new Date(),
        title:'',
        description:''
    }

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.users.map(user => user.username)});
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onChangeDate = date => {
        this.setState({date})
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    {/* SELECT USER */}
                    <div className="form-group">
                        <select className="form-control" name="user" onChange={this.onInputChange}>
                        {
                            this.state.users.map(user => (
                                <option key={user} value={user}>
                                    {user}
                                </option>))
                        }
                        </select>
                    </div>
                    {/* INSERT TITLE TO TASK */}
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title" name="title" required onChange={this.onInputChange}/>
                    </div>
                    {/* INSERT DESCRIPTION TO TASK */}
                    <div className="form-group">
                        <textarea name="description" className="form-control" onChange={this.onInputChange} required></textarea>
                    </div>
                    {/* INSERT DATE */}
                    <div className="form-group">
                        <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate}/>
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

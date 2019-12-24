import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users:[],
        userSelected: '',
        date: new Date(),
        title:'',
        content:''
    }

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.users.map(user => user.username), 
            userSelected: res.data.users[0].username
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.author
        };

        const res = await axios.post('http://localhost:4000/api/notes', newNote);
        window.location.href = '/';
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
                        <select className="form-control" name="author" onChange={this.onInputChange}>
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
                        <textarea name="content" className="form-control" onChange={this.onInputChange} required></textarea>
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

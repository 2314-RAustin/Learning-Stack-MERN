import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

    state = {
        users:[],
        author: '',
        date: new Date(),
        title:'',
        content:'',
        editing: false,
        _id:''
    };

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.users.map(user => user.username), 
            author: res.data.users[0].username
        });

        if(this.props.match.params.id){
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            this.setState({
                author: res.data.note.author,
                title: res.data.note.title,
                content: res.data.note.content,
                date: new Date(res.data.note.date),
                editing: true,
                _id: this.props.match.params.id
            });
        };
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.author
        };

        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote);
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';
    };

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onChangeDate = date => {
        this.setState({date})
    };

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    {/* SELECT USER */}
                    <div className="form-group">
                        <select className="form-control" name="author" onChange={this.onInputChange} value={this.state.author}>
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
                        <input type="text" className="form-control" placeholder="Title" name="title" required onChange={this.onInputChange} value={this.state.title}/>
                    </div>
                    {/* INSERT DESCRIPTION TO TASK */}
                    <div className="form-group">
                        <textarea name="content" className="form-control" onChange={this.onInputChange} required value={this.state.content}></textarea>
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
    };
};

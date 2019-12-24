import React, { Component } from 'react';
import axios from 'axios';
import {format} from 'timeago.js';

export default class NotesList extends Component {
  state = {
    notes: []
  }

   componentDidMount = async () =>  {
    const res = await axios.get('http://localhost:4000/api/notes');
    this.setState({notes: res.data.notes});
  }

  deleteNote = async (id) => {
    const res = await axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.componentDidMount();
  }

  render() {
    return (
      <div className="row">
      {
        this.state.notes.map(note => (
          <div className="col-md-4 p-2">
            <div className="card">
              <div className="card-header">
                <h5>Title: {note.title}</h5>
              </div>
              <div className="card-body">
                <p key={note._id}> Description: {note.content}</p>
                <p>Author: {note.author}</p>
                <p>{format(note.date)}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    );
  }
}

import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegisterForms from "./components/RegisterForms";
import "./assets/App.css";
import "./assets/index.css"
class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
  }

  render() {
    return (
      <section className="content">
        <RegisterForms createNote={this.createNote.bind(this)} />
        <NotesList notes={this.state.notes} />
      </section>
    );
  }
}

export default App;

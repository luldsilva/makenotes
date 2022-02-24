import React, { Component } from "react";
import NotesList from "./components/NotesList";
import RegisterForms from "./components/RegisterForms";
import "./assets/App.css";
import "./assets/index.css"

class App extends Component {
  render() {
    return (
      <section className="content">
        <RegisterForms />
        <NotesList />
      </section>
    );
  }
}

export default App;

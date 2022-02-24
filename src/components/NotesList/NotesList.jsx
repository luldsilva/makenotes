import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";
class NotesList extends Component {
  render() {
    return (
      <ul className="list-notes">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="list-notes_item" key={index}>
              <div>{categoria}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default NotesList;

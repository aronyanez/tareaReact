import React from "react";

import Emoji from "./Emoji";
import Lista from "./Lista";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      tareas: [],
      editando: false,
      indexEditando: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.getEmoji = this.getEmoji.bind(this);
    this.enviarTarea = this.enviarTarea.bind(this);
    this.editarTarea = this.editarTarea.bind(this);
    this.eliminarTarea = this.eliminarTarea.bind(this);
  }

  handleChange(event) {
    this.setState({
      texto: event.target.value
    });
  }
  eliminarTarea(index) {
    this.setState(state => {
      const tareas = state.tareas.filter((tarea, i) => index != i);
      console.log(tareas);
      return {
        tareas
      };
    });
  }

  editarTarea(index) {
    let tarea = this.state.tareas[index];
    this.setState(state => {
      return {
        indexEditando: index,
        texto: tarea,
        editando: true
      };
    });


    
  }

  getEmoji(emoji) {
    let texto = (this.state.texto += emoji);
    this.setState({
      texto: texto
    });
  }

  enviarTarea() {
    if (this.state.editando == false) {
      this.setState(state => {
        const tareas = state.tareas.concat(state.texto);
        return {
          tareas,
          texto: ""
        };
      });
    } else {
      this.setState(state => {
        const tareas = state.tareas.map((tarea, i) => {
          if (i == state.indexEditando) {
            return state.texto;
          } else {
            return tarea;
          }
        });
        return {
          tareas,
          texto: "",
          editando: false
        };
      });
    }
  }

  emojis = [
    { id: 1, caracter: "🥑" },
    { id: 2, caracter: "🍞" },
    { id: 3, caracter: "🍻" },
    { id: 4, caracter: "🍿" },
    { id: 5, caracter: "🍣" },
    { id: 6, caracter: "🤠" },
    { id: 7, caracter: "😋" },
    { id: 8, caracter: "😢" },
    { id: 9, caracter: "❤️" },
    { id: 10, caracter: "👍" }
  ];

  render() {
    return (
      <div>
        <div className="emojis seccion">
          {this.emojis.map(emoji => (
            <Emoji
              key={emoji.id}
              caracter={emoji.caracter}
              setEmoji={this.getEmoji}
            />
          ))}
        </div>
        <div className="seccion">
          <input
            type="text"
            value={this.state.texto}
            onChange={this.handleChange}
          />
          <button onClick={this.enviarTarea}>🚀</button>
        </div>

        <Lista
          tareas={this.state.tareas}
          disabled={this.state.editando}
          onEliminarTarea={this.eliminarTarea}
          onEditarTarea={this.editarTarea}
        />
      </div>
    );
  }
}

export default Main;

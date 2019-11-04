import React from "react";

class Lista extends React.Component {
  constructor(props) {
    super(props);
  }

  editarTarea(index) {
    return;
  }
  eliminarTarea(index) {
    return this.props.onEliminarTarea(index);
  }

  render() {
    return (
      <div className="seccion">
        {this.props.tareas.map((tarea, index) => (
          <div className="atributo" key={index}>
            <span> {tarea}</span>
            <div className="tarea">
              <button
                disabled={this.props.disabled}
                onClick={() => {
                  this.props.onEditarTarea(index);
                }}
              >
                ✏
              </button>
              <button
                disabled={this.props.disabled}
                onClick={() => {
                  return this.props.onEliminarTarea(index);
                }}
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Lista;

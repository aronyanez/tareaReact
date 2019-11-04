import React from "react";

class Emoji extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.setEmoji(this.props.caracter);
          }}
        >
          {this.props.caracter}
        </button>
      </div>
    );
  }
}
export default Emoji;

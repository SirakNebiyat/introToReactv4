import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You Clicked the title!");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}> Adopt Me! </h1>
        <Pet name="Luna" animal="Dog" bread="Havanse" />
        <Pet name="Brian" animal="Cat" bread="Ugly" />{" "}
        <Pet name="Zicko" animal="bird" bread="Mixed" />{" "}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

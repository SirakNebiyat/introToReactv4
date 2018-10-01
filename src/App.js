const Pet = props => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.bread)
    ]);
};

class App extends React.Component {
    handleTitleClick() {
        alert("You Clicked the title!");
    }
    render() {
        return React.createElement("div", {}, [
            React.createElement(
                "h1", {
                    onClick: this.handleTitleClick
                },
                "Adopt Me!"
            ),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                bread: "Havanse"
            }),
            React.createElement(Pet, {
                name: "Brian",
                animal: "Cat",
                bread: "Ugly"
            }),
            React.createElement(Pet, {
                name: "Zicko",
                animal: "bird",
                bread: "Mixed"
            })
        ]);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
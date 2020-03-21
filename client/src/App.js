import React, { Component } from "react";
import "./App.css";

import PLayersList from "./components/PLayersList";

class App extends Component {
    state = { players: [] };

    fetchData = async () => {
        await fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ ...this.state, players: data });
            });
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="App">
                <h1>Create React App</h1>
                <PLayersList players={this.state.players} />
            </div>
        );
    }
}

export default App;

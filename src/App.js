import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Timeline from "./Components/Timeline/Timeline";
class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Timeline />
      </div>
    );
  }
}
export default App;

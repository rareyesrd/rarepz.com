import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Timeline from "./Components/Timeline/Timeline";
class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <div className="Header">
         <Header />
        </div>
        <div className="Timeline">
          <h3 className="timeline-title">We are working on this page!</h3>
          {/* <Timeline /> */}
          {/* <ul className="squares">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </div>
    );
  }
}
export default App;

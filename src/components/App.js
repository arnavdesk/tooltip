import React from "react";
import Button from "./Button";
import Select from "./Select";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "1",
      content: "Download",
    };
    this.selectRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  // function to find out what is selected in dropdown and set that state
  handleSelectChange = () => {
    this.setState({ direction: this.selectRef.current.value });
  };

  // get the class to apply by a key
  getCurrentDirections(key) {
    switch (key) {
      case "1":
        return {
          tooltipDir: "tooltip direction-top",
          arrowDir: "tooltip-arrow tooltip-arrow-bottom",
        };
      case "2":
        return {
          tooltipDir: "tooltip direction-bottom",
          arrowDir: "tooltip-arrow tooltip-arrow-top",
        };
      case "3":
        return {
          tooltipDir: "tooltip direction-left",
          arrowDir: "tooltip-arrow tooltip-arrow-right",
        };
      case "4":
        return {
          tooltipDir: "tooltip direction-right",
          arrowDir: "tooltip-arrow tooltip-arrow-left",
        };
      default:
        return {
          tooltipDir: "tooltip direction-bottom",
          arrowDir: "tooltip-arrow tooltip-arrow-top",
        };
    }
  }

  // when mouse exits sets from button opacity to 0 and change content to "download"
  setMouseLeave = () => {
    this.setState({ content: "Download" });
    this.tooltipRef.current.style.opacity = "0";
  };

  // when mouse enter sets from button opacity to 0.9 and change content to an icon
  setMouseEnter = () => {
    this.setState({ content: <i className="fas fa-download"></i> });
    this.tooltipRef.current.style.opacity = "0.9";
  };

  // Render the app
  render() {
    return (
      <div className="App">
        <h1>Tooltip Design</h1>
        <Select
          selectRef={this.selectRef}
          handleSelectChange={this.handleSelectChange}
        />
        <Button
          tooltipRef={this.tooltipRef}
          direction={this.state.direction}
          setMouseLeave={this.setMouseLeave}
          setMouseEnter={this.setMouseEnter}
          getCurrentDirections={this.getCurrentDirections}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default App;

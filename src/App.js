import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "1",
      content: "Download",
    };
    this.selectRef = React.createRef();
  }

  handleSelectChange = () => {
    this.setState({ direction: this.selectRef.current.value });
  };

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

  setDownloadContent = () => {
    this.setState({ content: "Download" });
  };

  setDownloadIcon = () => {
    this.setState({ content: <i className="fas fa-download"></i> });
  };

  render() {
    let directions = this.getCurrentDirections(this.state.direction);

    return (
      <div className="App">
        <select
          id="direction-dd"
          ref={this.selectRef}
          onChange={this.handleSelectChange}
        >
          <option value="1">Top</option>
          <option value="2">Down</option>
          <option value="3">Left</option>
          <option value="4">Right</option>
        </select>
        <div className="tooltip-container">
          <button
            className="button"
            onMouseLeave={this.setDownloadContent}
            onMouseEnter={this.setDownloadIcon}
          >
            {this.state.content}
          </button>
          <div className={directions.tooltipDir}>
            <div className="tooltip-text">Click here to download</div>
            <div className={directions.arrowDir}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

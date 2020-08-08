import React, { Component } from "react";

class Button extends Component {
  // render a button and tooltip
  // getCurrentDirections is called for getting the direction selected in dropdown
  render() {
    const {
      direction,
      getCurrentDirections,
      setMouseEnter,
      setMouseLeave,
      content,
      tooltipRef,
    } = this.props;
    let directions = getCurrentDirections(direction);
    return (
      <div className="tooltip-container">
        <button
          className="button"
          onMouseLeave={() => setMouseLeave()}
          onMouseEnter={() => setMouseEnter()}
        >
          {content}
        </button>
        <div ref={tooltipRef} className={directions.tooltipDir}>
          <div className="tooltip-text">Click here to download</div>
          <div className={directions.arrowDir}></div>
        </div>
      </div>
    );
  }
}

export default Button;

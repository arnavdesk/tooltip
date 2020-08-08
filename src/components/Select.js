import React, { Component } from "react";

class Select extends Component {
  // Render a select button which has 4 values mapped to directions and on change of value it calls a function
  render() {
    const { handleSelectChange, selectRef } = this.props;
    return (
      <div>
        <label>
          <bold>Select direction : </bold>
        </label>
        <select id="direction-dd" ref={selectRef} onChange={handleSelectChange}>
          <option value="1">Top</option>
          <option value="2">Down</option>
          <option value="3">Left</option>
          <option value="4">Right</option>
        </select>
      </div>
    );
  }
}

export default Select;

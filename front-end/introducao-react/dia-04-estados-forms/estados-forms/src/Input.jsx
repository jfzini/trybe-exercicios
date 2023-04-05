import React, { Component } from 'react';

class Input extends Component {
  
  render() {
    const { value, handleChange, type, content, name } = this.props;

    return (
      <label htmlFor={type}>
        {content}
        <input
          type={type}
          name={name}
          id={type}
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Input;

import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    userName: '',
    userNumber: 0,
    textArea: '',
    select: '',
  };

  handleTextAreaChange = (event) => {
    this.setState({
      textArea: event.target.value,
    });
  };

  render() {
    const { userName, userNumber, textArea, select } = this.state;

    return (
      <>
        <h1>Meu formulário</h1>
        <form className="form">
          <label htmlFor="select">
            Qualquer coisa:
            <select name="select" id="select">
              Qualquer Coisa
            </select>
          </label>

          <label htmlFor="text">
            Insira um texto:
            <input type="text" name="userName" id="text" />
          </label>

          <label htmlFor="number">
            Insira um número:
            <input type="number" name="userNumber" id="number" />
          </label>

          <label htmlFor="textarea">
            Insira um texto grandão:
            <textarea
              name="textArea"
              id="textarea"
              value={textArea.toUpperCase()}
              onChange={this.handleTextAreaChange}
            />
          </label>
        </form>
      </>
    );
  }
}

export default Form;

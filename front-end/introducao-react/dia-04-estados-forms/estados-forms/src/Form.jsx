import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    userName: '',
    userNumber: 0,
    textArea: '',
    select: '',
    checkBox: false,
  };

  handleChange = ({ target }) => {
    const value = target.name === 'checkBox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  render() {
    const { userName, userNumber, textArea, select, checkBox } = this.state;

    return (
      <>
        <h1>Meu formulário</h1>
        <form className="form">
          <label htmlFor="select">
            Qualquer coisa:
            <select name="select" id="select" onChange={this.handleChange}>
              Qualquer Coisa
            </select>
          </label>

          <label htmlFor="text">
            Insira um texto:
            <input
              type="text"
              name="userName"
              id="text"
              value={userName.toUpperCase()}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="number">
            Insira um número:
            <input
              type="number"
              name="userNumber"
              id="number"
              value={userNumber}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="textarea">
            Insira um texto grandão:
            <textarea
              name="textArea"
              id="textarea"
              value={textArea.toUpperCase()}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="checkbox">
            Aceito os termos de serviço:
            <input
              type="checkbox"
              name="checkBox"
              value={checkBox}
              id="checkbox"
              onChange={this.handleChange}
            />
          </label>
        </form>
      </>
    );
  }
}

export default Form;

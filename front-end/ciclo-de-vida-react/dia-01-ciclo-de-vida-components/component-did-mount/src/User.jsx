import React, { Component } from 'react';

class User extends Component {
  state = {
    isLoadings: true,
    userData: {},
  };

  componentDidMount() {
    fetch('https://api.randomuser.me/')
    .then(response => response.json())
    .then(data => { 
      console.log(data);
      const {
        name: {title, first, last},
        email,
        dob: {age},
        picture: { medium }
      } = data.results[0];
      this.setState({
        isLoadings: false,
        userData: {
          name: `${title} ${first} ${last}`,
          email,
          age,
          medium,
        },
      });
    })
  }

  render() {
    const { isLoadings, userData:{name, email, age, medium} } = this.state;

    return (
      <>
        {isLoadings
        ? (<div>Carregando...</div>)
        : (
          <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{age}</p>
          <img src={medium} alt="" />
        </div>
        )}
      </>
    );
  }
}

export default User;

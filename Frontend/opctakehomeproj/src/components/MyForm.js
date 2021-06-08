import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        phoneNumber : '',
        email : '',
        hobbies : '',
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    submitHandler = (event) => {
      event.preventDefault();
      fetch('http://localhost:8000/api/v1/user/create', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      .then(response => response.json())
      .then(data => {
        alert('User Has Been Added , Pls Reload to See The New User');
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    
    render() {
      return (
        <form onSubmit={this.submitHandler} >
        <h1>Hello {this.state.name}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='name'
          onChange={this.myChangeHandler}
        />
        <p>Enter your Mobile Number:</p>
        <input
          type='text'
          name='phoneNumber'
          onChange={this.myChangeHandler}
        />
        <p>Enter your email :</p>
        <input
          type='text'
          name='email'
          onChange={this.myChangeHandler}
        />
        <p>Enter your hobbies :</p>
        <input
          type='text'
          name='hobbies'
          onChange={this.myChangeHandler}
        />
        <button type='submit'>Submit</button>
        </form>
      );
    }
}


export default MyForm

  
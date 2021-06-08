import MyForm from './components/MyForm';
import MyTable from './components/MyTable';
import React, { Component } from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export class App extends Component {
  state = {
    data : [],
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/api/v1/user/fetch`)
      .then(res => this.setState({data : res.data}));
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
        <div><MyTable details={this.state.data} /></div>
        <div>
        <Popup trigger={<button> Click Here To Add User </button>} position="right center">
          <div><MyForm /></div>
        </Popup>
        </div>
      </div>
    )
  }
}

export default App


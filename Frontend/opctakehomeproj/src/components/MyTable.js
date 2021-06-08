import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
const dataArray = [];

class MyTable extends Component {

  render() {
    const deleteHandler = (id) => {
        fetch(`http://localhost:8000/api/v1/user/delete/${id}`, {
             method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => alert("deletion successful") );
    }

    const checkboxArray = (id) =>{
        dataArray.push(id);
    }
    const manageCheckBox = () =>{
        console.log(dataArray);
        const value = JSON.stringify(dataArray);
        fetch('http://localhost:8000/api/v1/user/send', {
            method: 'POST', // or 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: value,
          })
          .then(response => response.json())
          .then(data => {
            alert('Email Successfully Sent');
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    return (
        <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>checkbox</Table.HeaderCell>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Fullname</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Hobbies</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.details.map(el => {
            return (
              <Table.Row key={el._id}>
                <Table.Cell><input type="checkbox" onClick={()=>checkboxArray(el._id)}></input></Table.Cell>
                <Table.Cell>{el._id}</Table.Cell>
                <Table.Cell>{el.name}</Table.Cell>
                <Table.Cell>{el.phoneNumber}</Table.Cell>
                <Table.Cell>{el.email}</Table.Cell>
                <Table.Cell>{el.hobbies}</Table.Cell>
                <Table.Cell><button onClick={this.updateHandler}>Update</button></Table.Cell>
                <Table.Cell><button onClick={()=>deleteHandler(el._id)}>Delete</button></Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <button onClick={()=>manageCheckBox()}>Click Here To Mail Selected Users</button> 
      </div>
    );
  }
}


export default MyTable;
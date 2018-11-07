import React, { Component } from 'react';

export default class AllUsers extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      members: [], 
      name: 'johny',
      surname: 'tester',
      email: 'testing',
    
    }
    this.logChange = this.logChange.bind(this);
}
componentDidMount() {
  let self = this;
  fetch('/users')
    .then(res => res.json())
    .then(members => self.setState({ members: members }));
}
logChange(e) {
      this.setState({[e.target.name]: e.target.value});  
  }
handleSubmit = () => {
  var data = {
    name: this.state.name,
    surname: this.state.surname,
    email: this.state.email

}
console.log(data)
fetch("http://localhost:4007/users/new", {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
}).then(function(response) {
  if (response.status >= 400) {
    throw new Error("Bad response from server");
  }
  return response.json();
}).then(function(data) {
  console.log(data)    
  if(data == "success"){
     this.setState({msg: "Thanks for registering"});  
  }
}).catch(function(err) {
  console.log(err)
});
}


render() {
  return (
      <div className="Users container">
        <h1>Users</h1>
        <table className="table">
        <thead>
          <tr>
            <th>Member name</th>
            <th>Member email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {this.state.members.map(member =>
              <tr key={member.id}>
                <td>{member.name} {member.surname}</td>
                <td>{member.email}</td>
                <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button></td>
              </tr>
            )}
        </tbody>
        </table>
        <button onClick={this.handleSubmit} >Submit </button>
       
      
      </div>
  );
}
}


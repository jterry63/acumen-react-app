import React, { Component } from 'react';

export default class Surveys extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      surveys: [], 
      question1_value: 2,
      question1_comment: 'tester',
      question2_value: 2,
      question2_comment: 'tester',
      question3_value: 2,
      question3_comment: 'tester',
      question4_value: 2,
      question4_comment: 'tester',
      question5_value: 2,
      question5_comment: 'tester',
      question6_value: 2,
      question6_comment: 'tester',
      question7_value: 2,
      question7_comment: 'tester',
      question8_comment: 'tester'
      
    
    }
    this.logChange = this.logChange.bind(this);
}
componentDidMount() {
  let self = this;
  fetch('/surveys')
    .then(res => res.json())
    .then(surveys => self.setState({ surveys: surveys }));
}
logChange(e) {
      this.setState({[e.target.name]: e.target.value});  
  }
handleSubmit = () => {
  var data = {
    question1_value: this.state.question1_value,
    question1_comment: this.state.question1_comment,
    question2_value: this.state.question2_value,
    question2_comment: this.state.question2_comment,
    question3_value: this.state.question3_value,
    question3_comment: this.state.question3_comment,
    question4_value: this.state.question4_value,
    question4_comment: this.state.question4_comment,
    question5_value: this.state.question5_value,
    question5_comment: this.state.question5_comment,
    question6_value: this.state.question6_value,
    question6_comment: this.state.question6_comment,
    question7_value: this.state.question7_value,
    question7_comment: this.state.question7_comment,
    question8_comment: this.state.question8_comment

}
console.log(data)
fetch("http://localhost:4007/surveys/new", {
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
      <div className="Users container" style={{width: "100%"}}>
        <h1>Surveys</h1>
        <table className="table">
        <thead>
          <tr>
            <th>Question 1 Values</th>
            <th>Question 1 Comments</th>
            <th>Question 2 Values</th>
            <th>Question 2 Comments</th>
            <th>Question 3 Values</th>
            <th>Question 3 Comments</th>
            <th>Question 4 Values</th>
            <th>Question 4 Comments</th>
            <th>Question 5 Values</th>
            <th>Question 5 Comments</th>
            <th>Question 6 Values</th>
            <th>Question 6 Comments</th>
            <th>Question 7 Values</th>
            <th>Question 7 Comments</th>
            <th>Question 8 Comments</th>
           

           
          </tr>
        </thead>
        <tbody>
            {this.state.surveys.map(survey =>
              <tr key={survey.id}>
                <td>{survey.question1_value}</td>
                <td>{survey.question1_comment}</td>
                <td>{survey.question2_value}</td>
                <td>{survey.question2_comment}</td>
                <td>{survey.question3_value}</td>
                <td>{survey.question3_comment}</td>
                <td>{survey.question4_value}</td>
                <td>{survey.question4_comment}</td>
                <td>{survey.question5_value}</td>
                <td>{survey.question5_comment}</td>
                <td>{survey.question6_value}</td>
                <td>{survey.question6_comment}</td>
                <td>{survey.question7_value}</td>
                <td>{survey.question7_comment}</td>
                <td>{survey.question8_comment}</td>
               
               
              </tr>
            )}
        </tbody>
        </table>
        <button onClick={this.handleSubmit} >Submit </button>
       
      
      </div>
  );
}
}

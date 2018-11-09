import React, { Component } from "react";
import { Icon, Button, SimpleSelect, ButtonGroup, DonutChart } from 'mx-react-components';
import './Admin.css';

import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import { right } from "glamor";
import { truncateSync } from "fs";



const { Styles } = require('mx-react-components');





class Admin extends Component {

    state = {
        selectedItem: null,
        showMenu: false, 
        surveys: [],
        q1t1: 2,
        questionOneTotal: 10
        
      };

      componentDidMount() {
        let self = this;
        fetch('/surveys')
          .then(res => res.json())
          .then(surveys => self.setState({ surveys: surveys }))
        // fetch('surveys/q1t1')
        //   .then(res => res.json())
        //   .then(q1t1 => self.setState({ q1t1: q1t1 }))
          
      }

      componentDidUpdate() {
        if (this.state.questionOneTotal===10) {
        this.setState({ questionOneTotal: parseInt(this.state.surveys[17].question1_value) + parseInt(this.state.surveys[17].question1_value) })
        
        }
      }

    

   
    
      _handleItemClick = (e, item) => {
        this._toggleMenu();
        this.setState({ selectedItem: item.text });
        
        // console.log(parseInt(this.state.surveys[17].question1_value))
        // this.setState({ test: parseInt(this.state.surveys[17].question1_value)})
      };
    
      _toggleMenu = () => {
        this.setState(state => ({ showMenu: !state.showMenu }));
      };
    
  render() {
 
   
    
    return (
      <div>

          <tbody className="hideMe">
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


       <nav>
        <div className="nav-wrapper" style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,.08)'}}>
          <a href="#" className="brand-logo"><img src="images/acumen3.png" /></a>
          <div className="right" style={{marginRight: "50px", marginTop: '5px'}}>
          <Button
    icon='gear'
   
    onClick={this._toggleMenu}
    type='primaryOutline'
    styles={{ base: { fill: '#959CA6' } }}
    // styles={{ menu: { backgroundColor: 'red' } }}
  >
  
  </Button>
  {this.state.showMenu ? (
    <SimpleSelect
      aria-label='Select a category'
      items={[
        { text: 'Settings', onClick: this._handleItemClick },
        { text: 'Logout', onClick: this._handleItemClick }
      ]}
      onScrimClick={this._toggleMenu}
    //   styles={{ menu: { backgroundColor: 'red' } }}
    />
  ) : null}
  </div>

            
            
           
        </div>
      </nav>

<div className="sidebar"> 
<br></br>

 <div>
           
            <CollapsibleComponent>

                <CollapsibleHead isExpanded={true} className="additionalClassForHead"> 
                  <Icon
                    size={25}
                    style={{ fill: 'white', marginRight: 10, marginBottom: 6 }}
                    type='net-worth'
                  />
                Results</CollapsibleHead>

                <CollapsibleContent isExpanded={true} className="additionalClassForContent">
                <ul className="dropDownList">
                  <li className="dropDownItem"> <div className="bullet"/>
Overview</li>
                  <li className="dropDownItem">Question Analysis</li>
                 
                </ul>
                </CollapsibleContent>
 
                <CollapsibleHead className="additionalClassForHead">
                <Icon
                    size={20}
                    style={{ fill: 'white', marginRight: 10, marginBottom: 3 }}
                    type='user'
                  />
                Users</CollapsibleHead>
            
                <CollapsibleContent className="additionalClassForContent">
                <ul className="dropDownList">
                  <li className="dropDownItem">All Users</li>
                  <li className="dropDownItem">Teams</li>
                  <li className="dropDownItem">Management Analysis</li>
                </ul>
                </CollapsibleContent>
 
                <CollapsibleHead className="additionalClassForHead">
                <Icon
                    size={20}
                    style={{ fill: 'white', marginRight: 10, marginBottom: 3 }}
                    type='bill-pay'
                  />
                Surveys</CollapsibleHead>
                
                <CollapsibleContent className="additionalClassForContent">
                <ul className="dropDownList">
                  <li className="dropDownItem">Live Surveys</li>
                  <li className="dropDownItem">Concluded Surveys</li>
                  <li className="dropDownItem">Create</li>
                  <li className="dropDownItem">Deploy</li>
            
                </ul>
                </CollapsibleContent>
            </CollapsibleComponent>
        </div>

</div>

<div style={{backgroundColor: 'whitesmoke', height: '100vh', marginLeft: '250px'}}>

<br></br>

 <div className='month center'>
  <ButtonGroup
            buttons={[
              { 'aria-label': 'Back', icon: 'caret-left' },
              { 'aria-label': 'March 2015 to February 2016', text: 'November' },
              { 'aria-label': 'Forward', icon: 'caret-right' }
            ]}
            type='primaryOutline'
          />

          </div>

<div className="card" style={{margin: '20px', height: '300px'}}>


 

<div className="donutChart">
<br></br>
<DonutChart 
        
          activeOffset={5}
          animateOnHover={true}
          animationDuration={750}
          animationTypeOnLoad="roll"
          arcWidth={15}
          chartTotal={100}
          data={[
            {
              name: "1/5",
              value: this.state.questionOneTotal
            },
            {
              name: "2/5",
              value: 30
            },
            {
              name: "3/5",
              value: 40
            },
            {
              name: "4/5",
              value: 10
            },
            {
              name: "5/5",
              value: 10
            }
          ]}
          defaultLabelText="Total Users"
          defaultLabelValue="300"
          id="donut-1"
        />
</div>
</div>


</div>

    
    </div>
   
    
    
  );
  
  } 
}


export default Admin;
import React, { Component } from "react";
import { Icon, Button, SimpleSelect, ButtonGroup, DonutChart, Drawer, HeaderMenu, Modal, Menu } from 'mx-react-components';
import './Admin.css';

import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import { right } from "glamor";
import { truncateSync } from "fs";
const axios = require('axios');



const { Styles } = require('mx-react-components');





class Admin extends Component {

    state = {
        demoDrawerOpen: false,
        demoDrawerOpen2: false,
        selectedItem: null,
        showItems: false,
        showMenu: false, 
        surveys: [],
        questionOneTotal: 1,
        questionTwoTotal: 1,
        questionThreeTotal: 6,
        questionFourTotal: 6,
        questionFiveTotal: 5
        
        
      };

      componentWillMount() {

      axios.get(`/surveys`)  
      .then(res => {
        const surveys = res.data;
        this.setState({ surveys: surveys})
      });
   
      axios.get(`/surveys/q1t1`)
      .then(res => {
        const q1t1 = res.data;
        this.setState({ questionOneTotal: q1t1[0].total });
      })

      axios.get(`/surveys/q1t2`)
      .then(res => {
        const q1t2 = res.data;
        this.setState({ questionTwoTotal: q1t2[0].total });
      })

      axios.get(`/surveys/q1t3`)
      .then(res => {
        const q1t3 = res.data;
        this.setState({ questionThreeTotal: q1t3[0].total });
      })

      axios.get(`/surveys/q1t4`)
      .then(res => {
        const q1t4 = res.data;
        this.setState({ questionFourTotal: q1t4[0].total });
      })

      axios.get(`/surveys/q1t5`)
      .then(res => {
        const q1t5 = res.data;
        this.setState({ questionFiveTotal: q1t5[0].total });
      })

      }
   
    
      _handleItemClick = (e, item) => {
        this._toggleMenu();
        this.setState({ selectedItem: item.text });
      };
    
      _toggleMenu = () => {
        this.setState(state => ({ showMenu: !state.showMenu }));
      };

      _handleDemoButtonClick = () => {
        this.setState({
          demoDrawerOpen: true
        });
      };
    
      _handleDrawerClose = () => {
        this.setState({
          demoDrawerOpen: false
        });
      };
  
    
      _handleSimpleSelectClick = (event, item) => {
        this.setState({
          clickedMenu: item
        });
      };

      _handleClick = () => {
        this.setState({
          showItems: !this.state.showItems
        });
      };


      _renderDrawer = () => {
        const styles = this.styles();
    
        return (
          <Drawer
            aria-describedby='description'
            breakPoints={{ large: 1200, medium: 1100 }}
            contentStyle={styles.content}
            headerMenu={({ close }) => (
              <HeaderMenu
                buttonIcon='gear'
                buttonText='Settings'
                items={[
                  { icon: 'auto', onClick: this._handleSimpleSelectClick, text: 'Auto' },
                  { icon: 'kids', onClick: this._handleSimpleSelectClick, text: 'Kids' },
                  { icon: 'close', onClick: close, text: 'Close Drawer' }
                ]}
              />
            )}
            onClose={this._handleDrawerClose}
            portalTo='#app'
            title='Comments'
           
          >
            {({ close }) => {
              return (
                <div>
                  {this.state.clickedMenu && <code>You clicked: {this.state.clickedMenu.text}</code>}
                  <p id='description'>
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
                  </p>
                  <p>
                    <Button onClick={close}>Close Drawer</Button>
                  </p>
                  <p>
                    
                  </p>
                 
                </div>
              );
            }}
          </Drawer>
        );
      };
     
    
  render() {
    const styles = this.styles();
   
    
    return (
      <div>

       <nav>
        <div className="nav-wrapper" style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,.08)'}}>
          <a href="#" className="brand-logo"><img src="images/acumen3.png" /></a>
          <div className="right" style={{marginRight: "90px", marginTop: '12px'}}>
       
          <Menu
          isOpen={this.state.showItems}
          items={[
            {
              icon: 'no',
              label: 'Logout',
              onClick: () => {}
            }
         
          
          ]}
          onClick={this._handleClick}
        />

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

<div className="card" id="donutChart">


 

<div className="donutChart">
<br></br>

<DonutChart 
        
          activeOffset={5}
          animateOnHover={true}
          animationDuration={750}
          animationTypeOnLoad="roll"
          arcWidth={30}
          height={250}
          width={250}
          onClick={this._handleDemoButtonClick}
          chartTotal={this.state.questionOneTotal + this.state.questionTwoTotal + this.state.questionThreeTotal + this.state.questionFourTotal + this.state.questionFiveTotal}
          
          data={[
            {
              name: "Unfavorable",
              value: this.state.questionOneTotal + this.state.questionTwoTotal
            
            },
            {
              name: "Neutral",
              value: this.state.questionThreeTotal
            },
            {
              name: "Favorable",
              value: this.state.questionFourTotal + this.state.questionFiveTotal
            }
         
          ]}
          colors={["#959ca6", "#359BCF", "#58ac7b"]}
          defaultLabelText="Favorable"
          defaultLabelValue={parseInt(((this.state.questionThreeTotal + this.state.questionTwoTotal + this.state.questionOneTotal)/(this.state.questionFiveTotal + this.state.questionFourTotal))*100) + "%"}
          id="donut-1"
        />
</div>

{this.state.demoDrawerOpen && this._renderDrawer()}

</div>

</div>


    
    </div>
   
    
    
  );
  
  } 
  styles = () => {
    return {
      content: {
        padding: 60,
        fontFamily: 'ProximaNovaRegular, Helvetica, Arial, sans-serif',
        color: '#2E323F'
      },
      unorderdLists: {
        marginTop: 0,
        marginBottom: 8
      },
      listItem: {
        marginTop: 0,
        marginBottom: 0
      },
      navLabel: {
        padding: '7px 14px',
        position: 'relative',
        bottom: 5,
        '@media (max-width: 750px)': {
          display: 'none',
          padding: 0
        }
      },
      h5ListItem: {
        marginTop: 0,
        marginBottom: 0
      }
    };
  };
}


export default Admin;
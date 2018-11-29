import React, { Component } from "react";
import { Icon, Button, SimpleSelect, ButtonGroup, DonutChart, Drawer, HeaderMenu, Modal, Menu, Tooltip, PaginationButtons, MessageBox, SimpleInput } from 'mx-react-components';
import moment from "moment";
import { BarChart, BarTimeXAxis } from "mx-react-components";
import d3 from "d3";
import './Admin.css';

import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from 'react-collapsible-component'

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
    showModal: false,
    showSmallModal: false,
    surveys: [],
    questionOneTotalOne: 1,
    questionOneTotalTwo: 5,
    questionOneTotalThree: 6,
    questionOneTotalFour: 6,
    questionOneTotalFive: 5,
    surveysDeployed: 50,
    surveysCompleted: 45,
    surveysIncomplete: 9,
    surveysInProgress: 6,
    bulletOne: "bullet-active",
    bulletTwo: "bullet",
    bulletThree: "bullet",
    bulletFour: "bullet",
    bulletFive: "bullet",
    bulletSix: "bullet",
    bulletSeven: "bullet",
    bulletEight: "bullet",
    bulletNine: "bullet",
    overviewSection: "block",
    userSection: "none",
    surveySection: "none"


  };

  componentWillMount() {

    axios.get(`/surveys`)
      .then(res => {
        const surveys = res.data;
        this.setState({ surveys: surveys })
      });

    axios.get(`/surveys/q1t1`)
      .then(res => {
        const q1t1 = res.data;
        this.setState({ questionOneTotalOne: q1t1[0].total });
      })

    axios.get(`/surveys/q1t2`)
      .then(res => {
        const q1t2 = res.data;
        this.setState({ questionOneTotalTwo: q1t2[0].total });
      })

    axios.get(`/surveys/q1t3`)
      .then(res => {
        const q1t3 = res.data;
        this.setState({ questionOneTotalThree: q1t3[0].total });
      })

    axios.get(`/surveys/q1t4`)
      .then(res => {
        const q1t4 = res.data;
        this.setState({ questionOneTotalFour: q1t4[0].total });
      })

    axios.get(`/surveys/q1t5`)
      .then(res => {
        const q1t5 = res.data;
        this.setState({ questionOneTotalFive: q1t5[0].total });
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

  _handleSideNavClickOne = () => {
    this.setState({
      bulletOne: "bullet-active",
      bulletTwo: "bullet",
      bulletThree: "bullet",
      bulletFour: "bullet",
      bulletFive: "bullet",
      bulletSix: "bullet",
      bulletSeven: "bullet",
      bulletEight: "bullet",
      bulletNine: "bullet",

      overviewSection: "block",
      userSection: "none",
      surveySection: "none",
    })
  }

  // _handleSideNavClickTwo = () => {
  //   this.setState({
  //     bulletTwo: "bullet-active",
  //     bulletOne: "bullet",
  //     bulletThree: "bullet",
  //     bulletFour: "bullet",
  //     bulletFive: "bullet",
  //     bulletSix: "bullet",
  //     bulletSeven: "bullet",
  //     bulletEight: "bullet",
  //     bulletNine: "bullet",
  //   })
  // }

  _handleSideNavClickThree = () => {
    this.setState({
      bulletThree: "bullet-active",
      bulletOne: "bullet",
      bulletTwo: "bullet",
      bulletFour: "bullet",
      bulletFive: "bullet",
      bulletSix: "bullet",
      bulletSeven: "bullet",
      bulletEight: "bullet",
      bulletNine: "bullet",

      overviewSection: "none",
      surveySection: "none",
      userSection: "block"
    })
  }

  // _handleSideNavClickFour = () => {
  //   this.setState({
  //     bulletFour: "bullet-active",
  //     bulletOne: "bullet",
  //     bulletTwo: "bullet",
  //     bulletThree: "bullet",
  //     bulletFive: "bullet",
  //     bulletSix: "bullet",
  //     bulletSeven: "bullet",
  //     bulletEight: "bullet",
  //     bulletNine: "bullet",
  //   })
  // }

  // _handleSideNavClickFive = () => {
  //   this.setState({
  //     bulletFive: "bullet-active",
  //     bulletOne: "bullet",
  //     bulletTwo: "bullet",
  //     bulletFour: "bullet",
  //     bulletThree: "bullet",
  //     bulletSix: "bullet",
  //     bulletSeven: "bullet",
  //     bulletEight: "bullet",
  //     bulletNine: "bullet",
  //   })
  // }

  _handleSideNavClickSix = () => {
    this.setState({
      bulletSix: "bullet-active",
      bulletOne: "bullet",
      bulletTwo: "bullet",
      bulletFour: "bullet",
      bulletFive: "bullet",
      bulletThree: "bullet",
      bulletSeven: "bullet",
      bulletEight: "bullet",
      bulletNine: "bullet",

      overviewSection: "none",
      userSection: "none",
      surveySection: "block",
    })
  }

  // _handleSideNavClickSeven = () => {
  //   this.setState({
  //     bulletSeven: "bullet-active",
  //     bulletOne: "bullet",
  //     bulletTwo: "bullet",
  //     bulletFour: "bullet",
  //     bulletFive: "bullet",
  //     bulletSix: "bullet",
  //     bulletThree: "bullet",
  //     bulletEight: "bullet",
  //     bulletNine: "bullet",
  //   })
  // }

  // _handleSideNavClickEight = () => {
  //   this.setState({
  //     bulletEight: "bullet-active",
  //     bulletOne: "bullet",
  //     bulletTwo: "bullet",
  //     bulletFour: "bullet",
  //     bulletFive: "bullet",
  //     bulletSix: "bullet",
  //     bulletSeven: "bullet",
  //     bulletThree: "bullet",
  //     bulletNine: "bullet",
  //   })
  // }

  // _handleSideNavClickNine = () => {
  //   this.setState({
  //     bulletNine: "bullet-active",
  //     bulletOne: "bullet",
  //     bulletTwo: "bullet",
  //     bulletFour: "bullet",
  //     bulletFive: "bullet",
  //     bulletSix: "bullet",
  //     bulletSeven: "bullet",
  //     bulletEight: "bullet",
  //     bulletThree: "bullet",
  //   })
  // };

  _handleModalClick = () => {
    this.setState({
      showModal: true,
      showSmallModal: false
    });
  };

  _handleSmallModalClick = () => {
    this.setState({
      showModal: true,
      showSmallModal: true
    });
  };

  _handleModalClose = () => {
    this.setState({
      showModal: false,
      showSmallModal: false
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
            buttonIcon='sync'

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
              <PaginationButtons
                currentPage={1}
                // onClick={this._handleButtonClick}
                totalPages={8}
              />
              <br></br>

              <MessageBox
                color={Styles.Colors.PRIMARY}
                icon='submit-feedback'
                title='Question One: How happy are you working at Acumen Inc?'
              />
              <br></br>


              <div className="drawer-comments">

                <table>
                  <tbody>
                    <tr>
                      <td> <div className="drawer-bullet-positive" /> I really enjoy working here. I feel comfortable with the people I work with and I am happy with our management team. I think we could work on our culture but overall I am satisfied. </td>
                    </tr>
                    <tr>
                      <td> <div className="drawer-bullet-neutral" /> It is a decent place to work. The benefits are great but our time off policy could really use some adjustments. </td>
                    </tr>
                    <tr>
                      <td> <div className="drawer-bullet-negative" /> It's not great. I have been struggling to understand why our quotas are so high and continue to increase even when we miss our targets each quarter. It doesn't make any sense and puts a lot of added stress on us. We need to look at historical sales figures and built attainable quotes from that.</td>
                    </tr>
                    <tr>
                      <td> <div className="drawer-bullet-positive" /> I would recommend this company to anybody because I feel like I am valued here. I have never worked at a company that truly rewards their employees like ours does.</td>
                    </tr>
                    <tr>
                      <td> <div className="drawer-bullet-positive" /> Yep, its great. Been here a month and I am happy.</td>
                    </tr>
                    <tr>
                      <td> <div className="drawer-bullet-neutral" /> I would say that I am somewhat happy working here but I am worried about my career advancement opportunites. I was told when I was hired on that I would be able to move up in the organization but I am having a hard time seeing that path. I think more 1:1s with management would be helpful. </td>
                    </tr>
                    <tr>
                      <td><div className="drawer-bullet-positive" /> This company is the best and truly believes in our mission and values as an organization. I am proud to be a part of the team.</td>
                    </tr>


                  </tbody></table>

              </div>
              <p id='description'>


                {/* <tbody>
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
        </tbody> */}




              </p>



              <p>
                <Button onClick={close}>Close Drawer</Button>
              </p>


            </div>
          );
        }}
      </Drawer>
    );
  };


  render() {
    const styles = this.styles();
    const imageWidth = this.state.showSmallModal ? 400 : 1000;
    const imageHeight = this.state.showSmallModal ? 240 : 600;
    const imageStyle = { width: imageWidth, height: imageHeight, margin: 'auto' };

    //data gathering for Bar Chart












    //end of data gathering for bar chart


    return (
      <div>

        <nav>
          <div className="nav-wrapper" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,.08)' }}>
            <a href="#" className="brand-logo"><img src="images/acumen3.png" /></a>
            <div className="right" style={{ marginRight: "90px", marginTop: '12px' }}>

              <Menu
                isOpen={this.state.showItems}
                items={[
                  {
                    icon: 'no',
                    label: 'Logout',
                    onClick: () => { }
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
                  <li className="dropDownItem" onClick={this._handleSideNavClickOne}> <div className={this.state.bulletOne} />
                    Overview</li>
                  <li className="dropDownItem" onClick={this._handleSmallModalClick}> <div className={this.state.bulletTwo} /> Question Analysis</li>

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
                  <li className="dropDownItem" onClick={this._handleSideNavClickThree}> <div className={this.state.bulletThree} /> All Users</li>
                  <li className="dropDownItem" onClick={this._handleSmallModalClick}> <div className={this.state.bulletFour} /> Teams</li>
                  <li className="dropDownItem" onClick={this._handleSmallModalClick}> <div className={this.state.bulletFive} /> Management Analysis</li>
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
                  <li className="dropDownItem" onClick={this._handleSideNavClickSix}> <div className={this.state.bulletSix} /> Live Surveys</li>
                  <li className="dropDownItem" onClick={this._handleSmallModalClick}> <div className={this.state.bulletSeven} /> Concluded Surveys</li>
                  <li className="dropDownItem" onClick={this._handleSmallModalClick}> <div className={this.state.bulletEight} /> Create</li>
                  <li className="dropDownItem" onClick={this._handleSmallModalClick}> <div className={this.state.bulletNine} /> Deploy</li>

                </ul>
              </CollapsibleContent>
            </CollapsibleComponent>
          </div>

        </div>

        <div style={{ backgroundColor: 'whitesmoke', height: '100vh', marginLeft: '250px' }}>

          <br></br>

          <div className='month center'>
            <ButtonGroup
              buttons={[
                { 'aria-label': 'Back', icon: 'caret-left' },
                { 'aria-label': 'March 2015 to February 2016', text: 'Quarter 2' },
                { 'aria-label': 'Forward', icon: 'caret-right' }
              ]}
              type='primaryOutline'
            />

          </div>


          <div className="overview-section" style={{ display: this.state.overviewSection }}>

            <div className="centerCards center">

              <div className="card center" id="donutChart">


                <div className="card-horizontal">

                  <div className="card-stacked">
                    <div className="card-content">
                      <p style={{ textAlign: "left", color: "#474747" }}>Completed Surveys
           <Tooltip
                          placement={"bottom"}>An indication of of complete, incomplete, and in progress status of all surveys within the given quarter</Tooltip>
                      </p>
                    </div>
                    <div className="card-action">

                      <DonutChart

                        activeOffset={5}
                        animateOnHover={true}
                        animationDuration={750}
                        animationTypeOnLoad="roll"
                        arcWidth={20}
                        height={220}
                        width={220}
                        onClick={this._handleDemoButtonClick}
                        chartTotal={this.state.surveysIncomplete + this.state.surveysCompleted + this.state.surveysInProgress}

                        data={[
                          {
                            name: "Incomplete",
                            value: this.state.surveysIncomplete

                          },
                          {
                            name: "In Progress",
                            value: this.state.surveysInProgress
                          },
                          {
                            name: "Complete",
                            value: this.state.surveysCompleted
                          }

                        ]}
                        colors={["#959ca6", "#359BCF", "#58ac7b"]}
                        defaultLabelText="Completed"
                        defaultLabelValue={parseInt(((this.state.surveysCompleted) / (this.state.surveysIncomplete + this.state.surveysCompleted + this.state.surveysInProgress)) * 100) + "%"}
                        id="donut-1"
                      />
                    </div>
                  </div>
                </div>


                {this.state.demoDrawerOpen && this._renderDrawer()}

              </div>

              <div className="card center" id="donutChart">


                <div className="card-horizontal">

                  <div className="card-stacked">
                    <div className="card-content">
                      <p style={{ textAlign: "left", color: "#474747" }}>Survey Ratings
           <Tooltip
                          placement={"bottom"}>These ratings are pulled from the employee engagement question that asks "How happy are you working Example Inc?"<br></br> "Favorable" = 4-5<br></br> "Neutral" = 3<br></br> "Unfavorable" = 1-2 </Tooltip>
                      </p>
                    </div>
                    <div className="card-action">
                      <DonutChart

                        activeOffset={5}
                        animateOnHover={true}
                        animationDuration={750}
                        animationTypeOnLoad="roll"
                        arcWidth={20}
                        height={220}
                        width={220}
                        onClick={this._handleDemoButtonClick}
                        chartTotal={this.state.questionOneTotalOne + this.state.questionOneTotalTwo + this.state.questionOneTotalThree + this.state.questionOneTotalFour + this.state.questionOneTotalFive}

                        data={[
                          {
                            name: "Unfavorable",
                            value: this.state.questionOneTotalOne + this.state.questionOneTotalTwo

                          },
                          {
                            name: "Neutral",
                            value: this.state.questionOneTotalThree
                          },
                          {
                            name: "Favorable",
                            value: this.state.questionOneTotalFour + this.state.questionOneTotalFive
                          }

                        ]}
                        colors={["#959ca6", "#359BCF", "#58ac7b"]}
                        defaultLabelText="Favorable"
                        defaultLabelValue={parseInt(((this.state.questionOneTotalFive + this.state.questionOneTotalFour) / (this.state.questionOneTotalFive + this.state.questionOneTotalFour + this.state.questionOneTotalThree + this.state.questionOneTotalTwo + this.state.questionOneTotalOne)) * 100) + "%"}
                        id="donut-1"
                      />
                    </div>
                  </div>
                </div>


              </div>

              <div className="card center" id="commentCard">

                <div className="card-horizontal">

                  <div className="card-stacked">
                    <div className="card-content">
                      <p style={{ textAlign: "left", color: "#474747" }}>Total Comments
           <Tooltip
                          placement={"bottom"}>All comments collected from every question within a survey given during the indicated quarter</Tooltip>
                      </p>
                    </div>
                    <div className="card-action">
                      <div className="center">

                        <p className="totalCommentsNumber" onClick={this._handleDemoButtonClick}>68 </p>
                      </div>
                    </div>
                  </div>
                </div>









              </div>

            </div>
            <div className="card center" id="barChart">


              <div className="card-horizontal">

                <div className="card-stacked">
                  <div className="card-content">
                    <p style={{ textAlign: "left", color: "#474747" }}>Question Analysis
            <Tooltip
                        placement={"bottom"}>Indicates the average rating on each question from the surveys within the given quarter</Tooltip>
                    </p>

                  </div>
                  <div className="card-action">

                    <BarChart
                      width={900}
                      height={240}


                      data={[
                        {
                          label: '1',
                          color: '#519aca',
                          value: 5,

                        },
                        {
                          label: '2',
                          color: '#519aca',
                          value: 3
                        },
                        {
                          label: '3',
                          color: '#519aca',
                          value: 4
                        },
                        {
                          label: '4',
                          color: '#519aca',
                          value: 3
                        },
                        {
                          label: '5',
                          color: '#519aca',
                          value: 5
                        },
                        {
                          label: '6',
                          color: '#519aca',
                          value: 3
                        },
                        {
                          label: '7',
                          color: '#519aca',
                          value: 2
                        },
                      ]}


                    />




                  </div>
                </div>
              </div>


            </div>


          </div>

          <div className="user-section" style={{ display: this.state.userSection }}>

            <br></br>
            <div className="card center" id="users">


              <div className="card-horizontal">

                <div className="card-stacked">
                  <div className="card-content">
                    <div className="userBtn" style={{ textAlign: "left" }}>
                      <Button type='neutral'>  <Icon

                        size={20}

                        type='add'
                      /> Add User</Button>

                    </div>
                  </div>
                  <div className="card-action">

                    <table>
                      <tbody><tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Team</th>
                      </tr>

                        <tr>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Jill',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Smith',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'jill.smith@acumen.com',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Engineering',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Taylor',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Christensen',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'taylor.christensen@acumen.com',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Sales',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Allen',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Carr',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'allen.carr@acumen.com',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Marketing',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Dustin',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Atkinson',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'dustin.atkinson@acumen.com',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                          <td>
                            <SimpleInput
                              elementProps={{
                                id: 'inputOne',
                                placeholder: 'Marketing',
                              }}
                              styles={{
                                wrapper: { height: '55px' },
                              }}
                            />
                          </td>
                        </tr>

                      </tbody></table>


                  </div>
                </div>
              </div>


            </div>




          </div>


          <div className="survey-section" style={{ display: this.state.surveySection }}>

            Hi There
            
</div>










          {this.state.showModal ? (
            <Modal
              aria-describedby='description'
              aria-labelledby='title'
              buttons={[

                {

                  label: 'Close',
                  onClick: this._handleModalClose,
                  type: 'primary'
                }
              ]}
              footerContent={(
                <div style={{ color: '#ACB0B3', fontSize: '15px', padding: '1px 0' }}>
                  Check back soon for updates!
      </div>
              )}
              footerStyle={{ padding: '40px 20px' }}
              onRequestClose={this._handleModalClose}
              portalTo='#app'
              showFooter={true}
              showTitleBar={true}
              title='Coming Soon...'



            >
              <div style={{ padding: 20, textAlign: 'center' }}>
                <p id='title' style={{ fontFamily: 'Helvetica, Arial, sans-serif', textAlign: 'center', fontSize: "20px" }}>This feature is currently under development</p>

                <img alt='Random picture from the internet' src={`http://www.akrotics.com/assets/img/layout/software-dev.gif`} style={imageStyle} />
              </div>
            </Modal>
          ) : null}

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
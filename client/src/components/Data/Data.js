import React, { Component } from "react";
import "./Data.css";
import Range from '../../components/Range/Range';
import { ProgressBar, TextArea, Button, MessageBox, Styles, Icon } from "mx-react-components";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from "axios";



class Data extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      rangeValOne: 3,
      rangeValTwo: 3,
      rangeValThree: 3,
      rangeValFour: 3,
      rangeValFive: 3,
      rangeValSix: 3,
      rangeValSeven: 3,
      backgroundColor: "rgba(71,71,71,1)",
      imgSrc: "../images/acumen3.png",
      color: "white",
      border: "1px solid white",
      width: "10%",
      percentage: 0,
      progress: "Progress 0/8",
      visibility: "hidden",
      display: "block",
      commentOne: '',
      commentTwo: '',
      commentThree: '',
      commentFour: '',
      commentFive: '',
      commentSix: '',
      commentSeven: '',
      commentEight: '', 
      questionTwo: 'hidden-question',
      questionThree: 'hidden-question',
      questionFour: 'hidden-question',
      questionFive: 'hidden-question',
      questionSix: 'hidden-question',
      questionSeven: 'hidden-question',
      questionEight: 'hidden-question',
      arrowOne: 'message-icon',
      checkOne: 'check-icon-one',
      arrowTwo: 'message-icon',
      checkTwo: 'check-icon-one',
      arrowThree: 'message-icon',
      checkThree: 'check-icon-one',
      arrowFour: 'message-icon',
      checkFour: 'check-icon-one',
      arrowFive: 'message-icon',
      checkFive: 'check-icon-one',
      arrowSix: 'message-icon',
      checkSix: 'check-icon-one',
      arrowSeven: 'message-icon',
      checkSeven: 'check-icon-one',
     
     

  
    }
    this.updateRangeOne = this.updateRangeOne.bind(this);
    this.updateRangeTwo = this.updateRangeTwo.bind(this);
    this.updateRangeThree = this.updateRangeThree.bind(this);
    this.updateRangeFour = this.updateRangeFour.bind(this);
    this.updateRangeFive = this.updateRangeFive.bind(this);
    this.updateRangeSix = this.updateRangeSix.bind(this);
    this.updateRangeSeven = this.updateRangeSeven.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleSubmit = () => {
  var data = {
    question1_value: this.state.rangeValOne,
    question1_comment: this.state.commentOne,
    question2_value: this.state.rangeValTwo,
    question2_comment: this.state.commentTwo,
    question3_value: this.state.rangeValThree,
    question3_comment: this.state.commentThree,
    question4_value: this.state.rangeValFour,
    question4_comment: this.state.commentFour,
    question5_value: this.state.rangeValFive,
    question5_comment: this.state.commentFive,
    question6_value: this.state.rangeValSix,
    question6_comment: this.state.commentSix,
    question7_value: this.state.rangeValSeven,
    question7_comment: this.state.commentSeven,
    question8_comment: this.state.commentEight

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
alert("Thank you for submitting the survey!");
window.location.href = "/";
}



  
  updateRangeOne(val) {
    this.setState({
      rangeValOne: Number(val)
    })
  } 

  updateRangeTwo(val) {
    this.setState({
      rangeValTwo: Number(val)
    })
  } 

  updateRangeThree(val) {
    this.setState({
      rangeValThree: Number(val)
    })
  } 

  updateRangeFour(val) {
    this.setState({
      rangeValFour: Number(val)
    })
  } 

  updateRangeFive(val) {
    this.setState({
      rangeValFive: Number(val)
    })
  } 

  updateRangeSix(val) {
    this.setState({
      rangeValSix: Number(val)
    })
  } 

  updateRangeSeven(val) {
    this.setState({
      rangeValSeven: Number(val)
    })
  } 

  showQuestionTwo = () => {
    this.setState({ 
      questionTwo: "q-two-visible",
      arrowOne: "hidden-question",
      checkOne: "message-icon"

  })
};

showQuestionThree = () => {
  this.setState({ 
      questionThree: "q-three-visible",
      arrowTwo: "hidden-question",
      checkTwo: "message-icon"
})
};

showQuestionFour = () => {
  this.setState({ 
      questionFour: "q-four-visible",
      arrowThree: "hidden-question",
      checkThree: "message-icon"
})
};

showQuestionFive = () => {
  this.setState({ 
      questionFive: "q-five-visible",
      arrowFour: "hidden-question",
      checkFour: "message-icon"
})
};

showQuestionSix = () => {
  this.setState({ 
     questionSix: "q-six-visible",
     arrowFive: "hidden-question",
     checkFive: "message-icon"
})
};

showQuestionSeven = () => {
  this.setState({ 
      questionSeven: "q-seven-visible",
      arrowSix: "hidden-question",
      checkSix: "message-icon"
})
};

showQuestionEight = () => {
  this.setState({ 
      questionEight: "q-eight-visible",
      arrowSeven: "hidden-question",
      checkSeven: "message-icon"
})
};



  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    if (window.scrollY > 10) {
      this.setState({ backgroundColor: "rgba(71,71,71,1)",
        imgSrc: "../images/acumen3.png",
        color: "white"
    
    });
      
    } else {
      this.setState({
        backgroundColor: "rgba(71,71,71,1)",
        imgSrc: "../images/acumen3.png",
        color: "white",
        border: "1px solid white"
      });
    }
  };

  handleMessageClick = () => {
    this.setState({ visibility: "visible"
    
});

  }

  hideMessage = () => {
    this.setState({ visibility: "hidden"
    
});

  }

 

  handleProgressUpdateOne = () => {
   
      this.setState({
        progress: "Progress 1/8",
        percentage: 12.5, 
        display: "block"

      })
      console.log(this.state.rangeValOne);
      console.log(this.state.commentOne);

     
      // this.state.surveyData.push(this.state.rangeValOne);
      // this.state.surveyData.push(this.state.commentOne);

      this.showQuestionTwo();
      scroll.scrollTo(1350);  

      // console.log(this.state.surveyData)
  };



  handleProgressUpdateTwo = () => {
    
      this.setState({
        progress: "Progress 2/8",
        percentage: 25

      })
      console.log(this.state.rangeValTwo);
      console.log(this.state.commentTwo);

      // this.state.surveyData.push(this.state.rangeValTwo);
      // this.state.surveyData.push(this.state.commentTwo);

      this.showQuestionThree();
      scroll.scrollMore(700);

      // console.log(this.state.surveyData)
  };

  handleProgressUpdateThree = () => {
   
      this.setState({
        progress: "Progress 3/8",
        percentage: 37.5

      })
      console.log(this.state.rangeValThree);
      console.log(this.state.commentThree);

      // this.state.surveyData.push(this.state.rangeValThree);
      // this.state.surveyData.push(this.state.commentThree);

      this.showQuestionFour();
      scroll.scrollMore(700);

      // console.log(this.state.surveyData)
  };

  handleProgressUpdateFour = () => {
    
      this.setState({
        progress: "Progress 4/8",
        percentage: 50

      })
      console.log(this.state.rangeValFour);
      console.log(this.state.commentFour);

      // this.state.surveyData.push(this.state.rangeValFour);
      // this.state.surveyData.push(this.state.commentFour);


      this.showQuestionFive();
      scroll.scrollMore(700);
      // console.log(this.state.surveyData)
  };

  handleProgressUpdateFive = () => {
    
      this.setState({
        progress: "Progress 5/8",
        percentage: 62.5

      })
      console.log(this.state.rangeValFive);
      console.log(this.state.commentFive);

      // this.state.surveyData.push(this.state.rangeValFive);
      // this.state.surveyData.push(this.state.commentFive);


      this.showQuestionSix();
      scroll.scrollMore(700);
      // console.log(this.state.surveyData)
  };

  handleProgressUpdateSix = () => {
  
      this.setState({
        progress: "Progress 6/8",
        percentage: 75

      })
      console.log(this.state.rangeValSix);
      console.log(this.state.commentSix);

      // this.state.surveyData.push(this.state.rangeValSix);
      // this.state.surveyData.push(this.state.commentSix);


      this.showQuestionSeven();
      scroll.scrollMore(700);
      // console.log(this.state.surveyData)
  };

  handleProgressUpdateSeven = () => {
   
      this.setState({
        progress: "Progress 7/8",
        percentage: 87.5

      })
      console.log(this.state.rangeValSeven);
      console.log(this.state.commentSeven);

      // this.state.surveyData.push(this.state.rangeValSeven);
      // this.state.surveyData.push(this.state.commentSeven);


      this.showQuestionEight();
      scroll.scrollMore(700);
      // console.log(this.state.surveyData)
  };

  handleProgressUpdateEight = () => {
   
      this.setState({
        progress: "Progress 8/8",
        percentage: 100

      })
      console.log(this.state.commentEight);

      // this.state.surveyData.push(this.state.commentEight);

      // console.log(this.state.surveyData)
  };

onInputChangeOne(commentOne) {
    this.setState({commentOne});
}
onInputChangeTwo(commentTwo) {
  this.setState({commentTwo});
}
onInputChangeThree(commentThree) {
  this.setState({commentThree});
}
onInputChangeFour(commentFour) {
  this.setState({commentFour});
}
onInputChangeFive(commentFive) {
  this.setState({commentFive});
}
onInputChangeSix(commentSix) {
  this.setState({commentSix});
}
onInputChangeSeven(commentSeven) {
  this.setState({commentSeven});
}
onInputChangeEight(commentEight) {
  this.setState({commentEight});
}




  render() {
    const { rangeValOne } = this.state;
    const { rangeValTwo } = this.state;
    const { rangeValThree } = this.state;
    const { rangeValFour } = this.state;
    const { rangeValFive } = this.state;
    const { rangeValSix } = this.state;
    const { rangeValSeven } = this.state;
    return (
        <div style={{ backgroundColor: "whitesmoke" }}>
               <nav
          className="nav-master-survey" style={{ backgroundColor: this.state.backgroundColor }}>
          <div className="navbar-fixed">
            <a className="navbar-brand-survey" href="#">
            <img src={this.state.imgSrc} />
            </a>
            
            <div className="container" id="progressBar">
        <p className="center light" id="progressText" style={{ color: this.state.color }}>{this.state.progress}</p>
        <ProgressBar
          baseColor='#ACB0B3'
          percentage={this.state.percentage}
          progressColor="#359BCF"
          styles={{ component: { width: '100%' } }}
        />
      </div>
            </div>
         
        </nav>
    
        {/*Survey Header*/}
        <div className="section" id="surveyHeader">
          <br /><br /><br /><br /><br /><br />
          <h1 className="center light" style={{ color: "white" }} id="helloHeader">Hello.</h1>
          <div className="row">
            <div className="col s3 m3" />
            <div className="col s6 m6">
              <div className="center">
                <h4 className="center light" id="surveyIntro" style={{ color: "white" }}> Welcome to the Acumen Pulse for August. Please take a minute to
                  answer the questions below. Your participation will help us get a real pulse on life at Example Inc.
                  So, thanks for taking part.
                </h4>
              </div>
            </div>
            <div className="col s3 m3" />
          </div>
          <div className="row">
            <div className="col s4 m4" />
            <div className="col s4 m4">
              <div className="center">
                {/* Dropdown Trigger */}
                <a className="dropdown-trigger light" data-target="dropdown1" style={{ color: "white" }}>English <i className="material-icons" style={{fontSize: 12}}>keyboard_arrow_down</i>
                </a>
                {/* Dropdown Structure */}
                <ul id="dropdown1" className="dropdown-content">
                  <li><a href="#!">Español</a></li>
                </ul>
              </div>
            </div>
            <div className="col s4 m4" />
          </div>
          <br />
          <p className="center light" id="surveyWarning" style={{ color: "white" }}>Your responses are confidential and reported to managers and Example Inc
            <br /> in aggregate groups. For more information view the: Data Protection Summary.<br /> Take care not to identify
            yourself in the comments.</p>
          <br />
          <div className="center">
            <Icon
          size={50}
          style={{ fill: 'white', cursor: "pointer", }}
          type='caret-down'
          
        />
            </div>
        </div>
        <div className="row">
          <div className="col s4 m4" />
          <div className="col s4 m4">
         
          </div>
          <div className="col s4 m4" />
        </div>
        {/*Question 1 Start*/}
        
        <br /> <br />

        <div className="card-container center-block" id="question_one" style={{ backgroundColor: "white" }}>
          <h2 className="center light">01.</h2>
          <h4 className="center light">How happy are you working at Acumen Inc?
          </h4>
          <br /><br />
          <div className="row">
            <div className="col s3 m3" />
            <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
              {/*Range Slider*/}
              <div className="center" onClick={this.hideMessage}>
              <Range range={rangeValOne} updateRange={this.updateRangeOne}/>
           
              </div>
              <div className="col s3 m3" />
            </div>
          </div>
        
        {/*Comment Field*/}
        <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeOne(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateOne}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateOne}>Skip</Button>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

       
<div className="center" id={this.state.arrowOne} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkOne}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
       
     
          {/*Question 1 End*/}
          {/*Question Hint 1 Start*/}
         
        
      
          {/*Question Hint 1 End*/}
          {/*Question 2 Start*/}
          <div className="card-container center-block" id={this.state.questionTwo}>
        
            <h2 className="center light">02.</h2>
            <h4 className="center light">I frequently receive recognition for my work.
            </h4>
            <br /><br />
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeValTwo} updateRange={this.updateRangeTwo}/>
                </div>
                <div className="col s3 m3" />
            </div>
          </div>
        
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeTwo(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateTwo}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateTwo}>Skip</Button>
              </div>
          </div>
        </div>
        <br /><br />
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

      
<div className="center" id={this.state.arrowTwo} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkTwo}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
        
          
          {/*Question 2 End*/}
          {/*Question Hint 2 Start*/}
      

      

          {/*Question Hint 2 End*/}
          {/*Question 3 Start*/}
          <div className="card-container center-block" id={this.state.questionThree}>
           
            <h2 className="center light">03.</h2>
            <h4 className="center light">I have the resources I need to do my job well.
            </h4>
            <br /><br />
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeValThree} updateRange={this.updateRangeThree}/>
                </div>
                <div className="col s3 m3" />
            </div>
          </div>
        
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeThree(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateThree}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateThree}>Skip</Button>
              </div>
          </div>
        </div>
        <br /><br />
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

            
<div className="center" id={this.state.arrowThree} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkThree}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
        
        
       
       
        
          {/*Question 3 End*/}
          {/*Question Hint 4 Start*/}
     
        
   

        
          {/*Question Hint 4 End*/}
          {/*Question 4 Start*/}
          <div className="card-container center-block" id={this.state.questionFour}>
           
            <h2 className="center light">04.</h2>
            <h4 className="center light">My manager provides me with feedback about my performance to help me do my job better.
            </h4>
            <br /><br />
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeValFour} updateRange={this.updateRangeFour}/>
                </div>
                <div className="col s3 m3" />
            </div>
          </div>
        
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeFour(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateFour}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateFour}>Skip</Button>
              </div>
          </div>
        </div>
        
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

            
<div className="center" id={this.state.arrowFour} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkFour}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
        
        <div className="col s3 m3" />
       
         
        
          {/*Question 4 End*/}
          {/*Question Hint 5 Start*/}
      

        
          {/*Question Hint 5 End*/}
          {/*Question 5 Start*/}
          <div className="card-container center-block" id={this.state.questionFive}>
           
            <h2 className="center light">05.</h2>
            <h4 className="center light">I feel empowered to make decisions regarding my work.
            </h4>
            <br /><br />
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeValFive} updateRange={this.updateRangeFive}/>
                </div>
                <div className="col s3 m3" />
            </div>
          </div>
       
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeFive(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateFive}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateFive}>Skip</Button>
              </div>
          </div>
        </div>
        <br /><br />
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

            
<div className="center" id={this.state.arrowFive} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkFive}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
        
        <div className="col s3 m3" />
        
          
         
          {/*Question 5 End*/}
          {/*Question Hint 5 Start*/}
     
        
       

        
          {/*Question Hint 5 End*/}
          {/*Question 6 Start*/}
          <div className="card-container center-block" id={this.state.questionSix}>
          
            <h2 className="center light">06.</h2>
            <h4 className="center light">I would highly recommend my manager to others.
            </h4>
            <br /><br />
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeValSix} updateRange={this.updateRangeSix}/>
                </div>
                <div className="col s3 m3" />
            </div>
          </div>
        
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeSix(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateSix}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateSix}>Skip</Button>
              </div>
          </div>
        </div>
        <br /><br />
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

           
<div className="center" id={this.state.arrowSix} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkSix}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
        
        <div className="col s3 m3" />
        
          
         
          {/*Question 6 End*/}
          {/*Question Hint 6 Start*/}
  
   

         
          {/*Question Hint 6 End*/}
          {/*Question 7 Start*/}
          <div className="card-container center-block" id={this.state.questionSeven}>
         
             
            <h2 className="center light">07.</h2>
            <h4 className="center light">I feel confident that my manager is the right person for the job.
            </h4>
            <br /><br />
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
              <div className="row" id="surveyTags">
                <div className="col s3 m3">
                  <div className="left-align light">
                    <p>Not at all</p>
                  </div>
                </div>
                <div className="col s6 m6" />
                <div className="col s3 m3">
                  <div className="right-align light">
                    <p>Completely happy</p>
                  </div>
                </div>
              </div>
                {/*Range Slider*/}
                <div className="center">
                <Range range={rangeValSeven} updateRange={this.updateRangeSeven}/>
                </div>
                <div className="col s3 m3" />
            </div>
          </div>
        
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeSeven(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateSeven}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateSeven}>Skip</Button>
              </div>
          </div>
        </div>
        <br /><br />
        <div className="center-block" id="message-box" style={{ visibility: this.state.visibility }} onClick={this.hideMessage}>
          <MessageBox
          icon='attention-solid'
          title='This question is required.'
          color={Styles.Colors.PRIMARY}
        />
        </div>

            
<div className="center" id={this.state.arrowSeven} onClick={this.handleMessageClick}>
         <Icon
          size={50}
          style={{ fill: 'silver', cursor: "pointer", }}
          type='caret-down'
          
        />
        </div>
        <div className="center" id={this.state.checkSeven}>
         <Icon
          size={50}
          style={{ fill: '#529aca'}}
          type='check-solid'
          
        />
        </div>


        
       
        </div>

         <br /><br />
       
        <div className="col s3 m3" />
       
         
          {/*Question 7 End*/}
          {/*Question Hint 7 Start*/}
        
        
       

           
          {/*Question Hint 7 End*/}
          {/*Question 8 Start*/}
          <div className="card-container center-block" id={this.state.questionEight}>
           
            <h2 className="center light">08.</h2>
            <h4 className="center light">What else is on your mind?
            </h4>
            
            <div className="row">
              <div className="col s3 m3" />
              <div className="col s6 m6">
          
                
                <div className="col s3 m3" />
            </div>
          </div>
        
                {/*Comment Field*/}
                <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="input-field" id="comment1" onClick={this.hideMessage}>
            <TextArea
          elementProps={{
            onChange: event => this.onInputChangeEight(event.target.value),
            placeholder: 'Comment'
          }}
          rows={5}
          valid={true}
        />
        <br />
              <Button className="right" id="save1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateEight}>Save</Button>
              <Button className="right" id="skip1" aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary' onClick={this.handleProgressUpdateEight}>Skip</Button>
            </div>
          </div>
        </div>
        
        <div className="col s3 m3" />
        
          <br /><br /><br /><br />
         
          {/*Question 8 End*/}
        
        <div className="center" id="submitBtn">
        <Button id="submit-responses" onClick={this.handleSubmit} aria-label='Submit Form' elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary'>Submit Responses</Button>
         
        </div>
      </div>
      
      <br /> <br />
      </div>
   

    );
  }
}

export default Data;
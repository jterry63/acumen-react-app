
import React, { Component } from "react";
import "./Body.css";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import { SimpleInput, Button} from 'mx-react-components';


class Body extends Component {


    render() {

      
        return (

    
<div>
<div className="row">


<div className="col s4 m4">

<Card 
  style={{border: 'none', height: '300px'}}

>
   
   <CardBody 
   
   
   >

   <h2 className="center"><i className="material-icons" style={{color: 'darkcyan', fontSize: 40}}>group</i></h2>
   <p className="light ">The Acumen platform provides a simple yet powerful experience for both the user and administrator. Give and receive the feedback that most important to driving your organization forward and providing an exceptional employee experience. 
               </p>

   </CardBody>
   
 </Card>
</div>
            <div className="col s4 m4">

 <Card
  style={{border: 'none', height: '300px'}}
 
 >
    
    <CardBody>
    <h2 className="center"><i className="material-icons" style={{color: 'darkcyan', fontSize: 40}}>data_usage</i></h2>
    <p className="light ">By utilizing elements and principles of Material Design, we were able to create a framework
                  that incorporates components and animations that provide more feedback to users. Additionally, a single underlying
                  responsive system across all platforms allow for a more unified user experience.</p>

    </CardBody>
    
  </Card>
</div>

<div className="col s4 m4">

<Card
  style={{border: 'none', height: '300px'}}


>
   
   <CardBody>
   <h2 className="center"><i className="material-icons" style={{color: 'darkcyan', fontSize: 40}}>feedback</i></h2>
   <p className="light ">We have provided detailed documentation as well as specific code examples to help new users
                  get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>

   </CardBody>
   
 </Card>
</div>





      </div>

      <div className="row" id="platform">
        platform section
      
      </div>

        <div className="row" id="product">
         product section
      
      </div>

       <div className="row" id="company">
         company section
      
      </div>

      	<section>
         <div className="container center">
            <div className="row">
               <div className="col-md-8 offset-md-2">
                  <div className="footer-text">
                     <img src="images/email.png" alt="email" />
                     <h2 className="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
                     <p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                     <div className="simple-input center-block" style={{width: '600'}}>
                      <SimpleInput
                        elementProps={{
                        placeholder: 'enter your email'
                        }}
                        styles={{
                          wrapper: { height: '55px'},
                          placeholder: {fontSize: '50px'}
                          
                        }}
                        />
                      </div>
<br></br>
                      <Button className="center" elementProps={{ 'data-my-attribute': 'my attribute data here' }} theme={{ Colors: { PRIMARY: '#333333' } }} type='secondary'>Send</Button>

  
                  </div>
               </div>
            </div>
         </div>
      </section>

      


      </div>
      );
    }
  }


export default Body;
import React, { Component } from 'react';
import { Card, Image, CardBody, CardFooter, FillButton, OutlineButton } from 'tailwind-react-ui';
import hero from '../../hero.png'

class ExploreCategories extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [
        {
          "id": 1,
          "title": "My First Website"
        },
        {
          "id": 2,
          "title": "FizzBuzz"
        }
      ]
    };
  }

//   <div class="container">
//   <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;">
//   <div class="bottom-left">Bottom Left</div>
//   <div class="top-left">Top Left</div>
//   <div class="top-right">Top Right</div>
//   <div class="bottom-right">Bottom Right</div>
//   <div class="centered">Centered</div>
// </div>


  render() {
    let categories
    let times = 3;

    categories = for(var i=0; i < times; i++) {
      return (
        <Card >
          <div className="card_container">
            <img src={hero} style={{width:"150px"}} />
            <div class="card_text_centered">Centered</div>
          </div>
        </Card>
      )
    } 

    return (
      <div style={{margin:"50px", paddingLeft: "8rem", paddingRight: "4rem"}}>
        <h1 style={{fontSize: "24px", fontWeight:"600", color:"#2e3e48", marginBottom: "1rem"}}>Explore categories</h1>
        <Card inlineBlock border shadow maxW="sm" style={{marginBottom:"15px", height:"150px", width:"310px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>
          <div className="card_container">
            <img src={hero} style={{width:"150px"}} />
            <div class="card_text_centered">Centered</div>
          </div>
        </Card>
      </div>
    )
  }

}

export default ExploreCategories;
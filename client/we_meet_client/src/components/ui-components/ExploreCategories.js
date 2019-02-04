import React, { Component } from 'react';
import { Card, Image, CardBody, CardFooter, FillButton, OutlineButton } from 'tailwind-react-ui';

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

  render() {
    return (
      <div style={{margin:"50px", paddingLeft: "8rem", paddingRight: "4rem"}}>
        <h1 style={{fontSize: "1rem", marginBottom: "1rem"}}>EXPLORE CATEGORIES</h1>
        <Card inlineBlock border shadow maxW="sm" style={{marginBottom:"15px", height:"150px", width:"310px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>
          <Image
            src="https://placekitten.com/1280/960"
            alt="Example image"
            width="10"
          />
          <CardBody>Hello World</CardBody>
          <CardFooter>
            <FillButton brand="primary">Read</FillButton>
            <OutlineButton brand="primary">Bookmark</OutlineButton>
          </CardFooter>
        </Card>
        <Card inlineBlock border shadow maxW="sm" style={{marginBottom:"15px", height:"150px", width:"310px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Category2</Card>
        <Card inlineBlock border shadow maxW="sm" style={{marginBottom:"15px", height:"150px", width:"310px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Category3</Card>
        <Card inlineBlock border shadow maxW="sm" style={{marginBottom:"15px", height:"150px", width:"310px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Category4</Card>
        <Card inlineBlock border shadow maxW="sm" style={{marginBottom:"15px", height:"150px", width:"310px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Category5</Card>
      </div>
    )
  }

}

export default ExploreCategories;
import React, { Component } from 'react';
import Carousel from "nuka-carousel";
import { Card, Box, CardBody, Col, Row } from 'tailwind-react-ui';
import moment from 'moment'

class EventsCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [
      {
        id: 1,
        title: 'Hackathon with Craft Academy',
        image: './assets/images/hackathon.jpg',
        avatar: './assets/images/person.jpg',
        date: 'Tuesday, February 20, 17:30',
        organizer: 'Tom Jones',
        group: 'Craft Academy'
      },
      {
        id: 2,
        title: 'Amphibian workouts',
        image: './assets/images/fit_frogs.jpg',
        avatar: './assets/images/person.jpg',
        date: 'Tuesday, February 22, 19:00',
        organizer: 'Lazy Bob',
        group: 'Get fit'
      },
      {
        id: 3,
        title: 'Kids game night',
        image: './assets/images/kids_playing.jpg',
        avatar: './assets/images/person.jpg',
        date: 'Saturday, February 20, 17:30',
        organizer: 'Steve O',
        group: 'Big Moma'
      },
      {
        id: 4,
        title: 'Wining & dining: Italian night',
        image: './assets/images/dining.jpg',
        avatar: './assets/images/person.jpg',
        date: 'Tuesday, February 22, 19:00',
        organizer: 'Bob Schnell',
        group: 'Food excursions'
      },
      {
        id: 5,
        title: 'Exotic vibes',
        image: './assets/images/exotic_music.jpg',
        avatar: './assets/images/person.jpg',
        date: 'Tuesday, February 22, 19:00',
        organizer: 'Jonas Gardell',
        group: 'New music'
      },
      {
        id: 6,
        title: 'Craft Academny graduation',
        image: './assets/images/graduation.jpg',
        avatar: './assets/images/person.jpg',
        date: 'Tuesday, February 22, 19:00',
        organizer: 'Tom Jones',
        group: 'Craft Academy'
      }
      ]
    };
  }

  render() {
    let events = this.state.events
    let eventsList = events.map(event => {
      return (
        <Box inlineBlock>
          <Card className="card" key={event.id} border shadow maxW="sm" style={{width:"314px", height:"300px", marginRight:"15px", marginBottom:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>
            <div >
              <img src={event.image} style={{objectFit:"cover", height:"180px", width:"314px"}}/>
            </div>
            <div className="top-left" style={{borderRadius:"3px", backgroundColor:"white", width:"50px", padding:"5px", border:"0.5px solid rgba(46,62,72,.6)"}}>
              <div style={{fontSize:"20px", fontWeight:"500", lineHeight:"1.1", color:"#CC1F1A"}}>
              {moment(event.date).format("DD")}
              </div>
              <div style={{fontWeight:"500", color:"rgba(46,62,72,.6)"}}>
              {moment(event.date).format("MMM")}
              </div>
            </div>
            <CardBody style={{textAlign:"left"}}>
              <div style={{color:"rgba(46,62,72,.6)", fontSize:"16px", fontWeight:"400", lineHeight:"16px"}}>{moment(event.date).format("dddd, MMMM DD, HH:mm")}</div>
              <div style={{color:"#2e3e48", fontSize:"20px", fontWeight:"600", marginTop:"2px"}}>{event.title}</div>
            </CardBody>
            <Row>
              <Col w="1/3">
                <img src={event.avatar} style={{alignment:"left", height:"70px", borderRadius:"80px"}}/>
              </Col>
              <Col w="1/3">
                <div style={{width:"80%", textAlign:"left"}}>
                  <div>Hosted by {event.organizer}</div>
                  <div>From {event.group}</div>
                </div>
              </Col>
            </Row>
          </Card>
          <div style={{fontSize: "16px", fontWeight:"600", color:"#2e3e48", marginBottom: "1rem"}}>{event.name}</div>
        </Box>
      )
    })

    return (
      <div style={{margin:"50px", paddingLeft: "8rem", paddingRight: "4rem"}}>
        <h1 style={{fontSize: "24px", fontWeight:"600", color:"#2e3e48", marginBottom: "1rem"}}>Events near you</h1>
        <Carousel renderBottomCenterControls="null" slidesToShow="3">
          {eventsList}
        </Carousel>
      </div>
    )
  }

}

export default EventsCarousel;

{/* <Card className="card" border shadow maxW="sm" style={{height:"150px", marginTop:"5px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event1</Card>
<Card className="card" border shadow maxW="sm" style={{height:"150px", marginTop:"5px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event2</Card>
<Card className="card" border shadow maxW="sm" style={{height:"150px", marginTop:"5px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event3</Card>
<Card className="card" border shadow maxW="sm" style={{height:"150px", mmarginTop:"5px", arginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event4</Card>
<Card className="card" border shadow maxW="sm" style={{height:"150px",marginTop:"5px",  marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event5</Card>
 */}

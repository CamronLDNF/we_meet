import React, { Component } from 'react';
import Carousel from "nuka-carousel";

class EventsCarousel extends Component {
  render() {
    return (
      <div style={{margin:"50px"}}>
        <Carousel slidesToShow="3" style={{border: "1px solid grey"}}>
          <div style={{marginLeft:"10px"}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card1" style={{border: "1px solid grey"}}/>
          </div>
          <div style={{marginLeft:"10px"}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card2" style={{border: "1px solid grey"}}/>
          </div>
          <div style={{marginLeft:"10px"}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card3" style={{border: "1px solid grey"}}/>
          </div>
          <div style={{marginLeft:"10px"}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card4" style={{border: "1px solid grey"}}/>
          </div>
          <div style={{marginLeft:"10px"}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card5" style={{border: "1px solid grey"}}/>
          </div>
          <div style={{marginLeft:"10px"}}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card6" style={{border: "1px solid grey"}}/>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default EventsCarousel;

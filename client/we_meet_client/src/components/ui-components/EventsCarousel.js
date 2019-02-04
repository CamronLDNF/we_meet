import React, { Component } from 'react';
import Carousel from "nuka-carousel";
import { Card } from 'tailwind-react-ui';

class EventsCarousel extends Component {

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
    const events = this.state.events
    let eventsList 

    eventsList = events.forEach(event => {
        return (
          <div key={event.id}>
            {event.title}
          </div>
        )
    })

    return (
      <div style={{margin:"50px", paddingLeft: "8rem", paddingRight: "4rem"}}>
        <h1 style={{fontSize: "24px", fontWeight:"600", color:"#2e3e48", marginBottom: "1rem"}}>Events near you</h1>
        <Carousel renderBottomCenterControls="null" slidesToShow="3">
          <Card border shadow maxW="sm" style={{height:"150px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event1</Card>
          <Card border shadow maxW="sm" style={{height:"150px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event2</Card>
          <Card border shadow maxW="sm" style={{height:"150px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event3</Card>
          <Card border shadow maxW="sm" style={{height:"150px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event4</Card>
          <Card border shadow maxW="sm" style={{height:"150px", marginRight:"15px", backgroundColor:"#F1F5F8", textAlign:"Center"}}>Event5</Card>
          {eventsList}
        </Carousel>
      </div>
    )
  }

}

// {this.state.events.map(event => <li key={event.id}>{event.title}</li>)}



  // async getEvents() {
  //   const response = await axios.get("http://localhost:3000/events")
  //   const events = response.data.events
  //   this.setState({ events });
  // }

  // componentDidMount() {
  //   this.getEvents()
  // }

  // render() {
  //   return (
  //     <div style={{margin:"50px", paddingLeft: "8rem", paddingRight: "4rem"}}>
  //       <h1 style={{fontSize: "1rem", marginBottom: "1rem"}}>EVENTS NEAR YOU</h1>
  //       <Carousel renderBottomCenterControls="null" slidesToShow="3" style={{border: "1px solid grey"}}>
  //         <div style={{marginLeft:"0px"}}>
            {/* <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=card1" style={{border: "1px solid grey"}}/> */}
          {/* </div> */}
          {/* <div style={{marginLeft:"10px"}}>
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
          </div> */}
      //   </Carousel>
      // </div>
    // );
  // }



export default EventsCarousel;



// import React, { Component } from "react"
// import axios from "axios"
// import ProjectCard from "./ProjectCard"

// class Projects extends Component {
//     constructor() {
//         super();
//         this.state = {
//             projects: []
//         };


//     }

//     componentDidMount() {
//         axios.get('./src/data/projects.json')
//             .then(response => {
//                 this.setState({
//                     projects: response.data
//                 })
//             })
//     }

//     render() {
//         const projects = this.state.projects
//         let projectsList 

//         if (projects.length > 0) {
//             projectsList = projects.map(project => {
//                 return (
//                     <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//                         <ProjectCard project={project} />
//                     </div>
//                 )
//             })
//         }


//         return (
//             <div className="content-wrapper">
//                 <div className="flex mb-4">

//                     <div className="w-3/4">
//                         <h1>My Projects</h1>
//                         <p>This is a selection of some of my projects I have been working on.</p>
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap -mx-1 lg:-mx-4">
//                     {projectsList}
//                 </div>
//         </div>
//         )
//     }
// };

// export default Projects
import React, { Component } from 'react';
import './css/tailwind.css';
import AppHeader from './components/ui-components/AppHeader'
import { TailwindThemeProvider } from 'tailwind-react-ui';
import Hero from './components/ui-components/Hero'
import Footer from './components/ui-components/Footer'
import EventsCarousel from './components/ui-components/EventsCarousel';
import ExploreCategories from './components/ui-components/ExploreCategories';

class App extends Component {
  render() {
    return (
      <>
        <TailwindThemeProvider
          theme={{
            brandColors: {
              primary: 'teal',
            },
          }}
        >
          <AppHeader />
          <Hero />
          <EventsCarousel />
          <ExploreCategories />
          <Footer />
        </TailwindThemeProvider>
      </>
    );
  }
}

export default App;
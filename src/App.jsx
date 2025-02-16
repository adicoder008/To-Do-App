import React, { Component } from 'react'
import News from './components/News'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  // apiKey=process.env.REACT_NEWS_APP_API;
  render() {
    return (
      <div >
        <BrowserRouter>
        <Navbar/>
         <Routes>{/*here only the end points change and we are having to 
         reload manually. cuz react this the component is already present
          so why remount, hence to force re-render we should give diff 
          unique keys to them to show that they are diff */}


{/* React only re-renders components if:

1.Their state or props change.
2.Their key changes (forces a remount). */}
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="Health" key="Health" element={<News category="Health" key="Health"/>}/>
        <Route exact path="Science" key="Science" element={<News category="Science" key="Science"/>}/>
        <Route exact path="Entertainment" key="Entertainment" element={<News category="Entertainment" key="Entertainment"/>}/>
        <Route exact path="Business" key="Business" element={<News category="Business" key="Business"/>}/>
        <Route exact path="Sports" key="Sports" element={<News category="Sports" key="Sports"/>}/>
        <Route exact path="Technology" key="Technology" element={<News category="Technology" key="Technology"/>}/>
        </Routes>
        
        <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'

import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Contact from './components/Contact'
import Map from './components/Map'
import UserView from './components/UserView'
import Body from './components/Body'


import { css } from 'emotion'

import list from "./Humboldttogo.json"



const App = () => {

  const [displayedPlaces, setdisplayedPlaces] = useState(list);
  const [city, setCity] = useState("Humboldt");
  const [businessType, setBusinessType] = useState("");
  const [userView, setUserView] = useState(false);

  return (
    <Router>
      <Route path="/">
          <Header list={displayedPlaces} setList={setdisplayedPlaces} setCurrentCity={setCity} currentCity={city} business={businessType} setBusiness={setBusinessType} />
            <UserView setView={setUserView} view={userView} business={businessType} restaurant={displayedPlaces} currentCity={city} />
          <Body view={userView} business={businessType} restaurant={displayedPlaces} currentCity={city} />
      </Route>
    </Router>
  )
}


export default App;

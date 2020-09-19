import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'

import Header from './components/Header';
import UserView from './components/UserView';
import Body from './components/Body';

import { ListContext } from './components/ListContext';



const App = () => {
  const values = useContext(ListContext);

  const [city, setCity] = useState(values.city);
  const [type, setType] = useState(values.businessType);
  const [places, setPlaces] = useState(values.displayedPlaces);


  return (
    <Router>
      <Route path="/">
        <ListContext.Provider value={{ values, city, setCity, type, setType, places, setPlaces}}>
          <Header />
          <UserView />
          <Body />
        </ListContext.Provider>
      </Route>
    </Router>
  )
}


export default App;

import React, { useContext, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./index.css"

// components
import { Header } from "../../components/Header"
import { Body } from "../../components/Body"

import { ListContext } from "../../components/ListContext"

export const Home = () => {
  const values = useContext(ListContext)

  const [city, setCity] = useState(values.city)
  const [type, setType] = useState(values.businessType)
  const [places, setPlaces] = useState(values.displayedPlaces)
  const [ready, setReady] = useState(values.ready)

  return (
    <Router>
      <Route path='/'>
        <ListContext.Provider
          value={{
            values,
            city,
            setCity,
            type,
            setType,
            places,
            setPlaces,
            ready,
            setReady,
          }}
        >
          <Header />
          <Body />
        </ListContext.Provider>
      </Route>
    </Router>
  )
}

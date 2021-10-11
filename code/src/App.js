import React from 'react'
import data from './data.json'
import Article from "./components/Article"


export const App = () => {
  return (
   <div>
     <Article 
      title="spring is coming" 
      description="Just a description" 
      img = "http://via.placeholder.com/150x150"
      weather = "weather"
      />
      <Article 
      title="winter is coming" 
      description="Just a description" 
      img = "http://via.placeholder.com/300x300"
      weather = "weather"
      />
   </div>
   
  )
}

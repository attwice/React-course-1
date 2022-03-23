import './App.css';
import React from 'react';

function greeting(name) {
  const date = new Date()
  const hours = date.getHours()

  let timeOfDay
  if (hours >= 4 && hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  return `Good ${timeOfDay}, ${name}!`
}




function App() {

  const [count, setCount] = React.useState(0)

  function add() {
    setCount(prevCount => prevCount + 1)
  }
  // Challenge: update `substract` to use a callback function

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])
  }

  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <p>{greeting("Bob")}</p>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}

      <button className="counter--minus" onClick={subtract}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  )
}

export default App;

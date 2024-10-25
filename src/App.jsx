
// import React from "react";
import NetflixSeriese from "./Components/NetflixSeriese"
// import { Fragment } from "react"
// import "./Components/Netflix.css"
import "./Components/Netflix.module.css"
// import { EventHandling } from "./Components/EventHandling"
// import { EventProps } from "./Components/EventProps"
// import { EventPropagation } from "./Components/EventPropagation"
// import { State } from "./Components/hooks/state"
// import {DerivedState} from "./Components/hooks/DerivedState"
// import {LiftingState} from "./Components/LiftingState"
// import {ToggleSwitch} from "./Components/Project/ToggleSwitch/ToggleSwitch"
import {Todo} from "./Components/Project/Todo/Todo"

export const App = () => {
  return (  
    <section className="container">
      <h1 className="card-heading text-red-700">List of Best Netflix Series</h1>
      <NetflixSeriese />
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      {/* <DerivedState /> */}
      {/* <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      <Todo />

      <NahidHasan />

    </section>
  )
}

function NahidHasan(){
  return (
    <h2 className="text-6xl my-5">Hey React</h2>
  );
}
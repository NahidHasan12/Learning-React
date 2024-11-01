
// import React from "react";
// import NetflixSeriese from "./Components/NetflixSeriese"
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
// import {Todo} from "./Components/Project/Todo/Todo"
// import ShortCircuitExample from "./Components/hooks/ShortCircuit"
// import {Counter} from "./Components/hooks/UseState/index"
// import {CounterChalange} from "./Components/hooks/UseState/IncrementDecrementChalange"
// import {Registration} from "./Components/hooks/UseState/Registration"
import {RegistrationReact} from "./Components/hooks/UseState/RegistrationReact"

export const App = () => {
  return (  
    <section className="container">
      {/* <h1 className="card-heading text-red-700">List of Best Netflix Series</h1> */}
      {/* <NetflixSeriese /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      {/* <DerivedState /> */}
      {/* <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo />
      <ShortCircuitExample />
      <Counter />
      <CounterChalange /> */}
      {/* <Registration /> */}
      <RegistrationReact />


      {/* <NahidHasan /> */}

    </section>
  )
}

function NahidHasan(){
  return (
    <h2 className="text-6xl my-5">Hey React</h2>
  );
}
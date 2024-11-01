
// import "./Hooks.css";
import { useState } from "react";

const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  // const [count, setCount] = useState(0);

  // if (user) {
  //   const [count, setCount] = useState(0);
  //   // setCount(count + 1);
  // }
  ``;
  // const getData = () => {
  //   const [data, setData] = useReducer(0);
  // };

  // getData();

  return (
    <section className="container short-container border mt-4" style={{ textAlign: "center" }}>
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
      {isLoggedIn && <p className="text-4xl my-2">You are logged in!</p>}

      {/* Another example of short circuit evaluation */}
      <p className="text-3xl my-2">{user ? `Hello ${user}` : "Plz log in!"}</p>

      <div className="grid-three-cols">
        <button className="p-5 bg-black text-white m-1" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button className="p-5 bg-black text-white m-1" onClick={() => setUser("vinod thapa")}>Set User</button>
        <button className="p-5 bg-black text-white m-1" onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuitExample;
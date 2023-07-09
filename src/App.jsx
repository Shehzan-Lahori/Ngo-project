import { useState } from "react";
import "./App.css";
import logo from "./images/susan-g-komen-3-day-CFkrwz1M_0s-unsplash.jpg";
import Loginpage from "./pages/Loginpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Loginpage />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main/Main";
import Body from "./components/Body/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Main />
      <Body />
    </section>
  );
}

export default App;

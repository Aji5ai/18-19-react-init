import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Contact from "./components/Contact.jsx";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        {/* On appelle plsuieurs fois notre composant avec différents paramètres/props */}
        <Contact
          name="Molag Bal"
          image="./public/thispersondoesnotexist.jpg"
          isConnected={true}
        />
        <Contact
          name="Méhrunes Dagon"
          image="./public/thispersondoesnotexist3.jpg"
          isConnected={false}
        />
        <Contact
          name="Hermaeus Mora"
          image="./public/thispersondoesnotexist2.jpg"
          isConnected={true}
        />
      </div>
    </>
  );
}

export default App;

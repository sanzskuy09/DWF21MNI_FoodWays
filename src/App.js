import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";

import { UserContextProvider } from "./Contexts/userContext";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <LandingPage />
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;

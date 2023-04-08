import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ModeChoices from "./routes/ModeChoices";
import NavbarHome from "./routes/NavbarHome";

function App() {
  return (
    <>
      <Router>
        <NavbarHome/>
        <Routes>
          <Route exact strict path="/" element={<Home />}/>
          <Route exact strict path="/mode" element={<ModeChoices />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

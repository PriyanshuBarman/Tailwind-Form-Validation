import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import NewWay from "./pages/NewWay";
import OldWayRealtime from "./pages/OldWayRealtime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-way" element={<NewWay />} />
        <Route path="/old-way" element={<OldWayRealtime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router";
import { BrowserRouter, Router } from "react-router";
import Signup from "./pages/Signup";
import RealTimeValidation from "./pages/RealTimeValidation";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/realtime-validation" element={<RealTimeValidation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import UserValidInvalid from "./pages/UserValidInvalid";
import ValidInvalid from "./pages/ValidInvalid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-way" element={<UserValidInvalid />} />
        <Route path="/old-way" element={<ValidInvalid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import Index from "./template/Index";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/villadarez" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;

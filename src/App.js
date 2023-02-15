import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Champions from "./pages/Champions";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/champions' element={<Champions />} />
      </Routes>
    </div>
  );
}

export default App;

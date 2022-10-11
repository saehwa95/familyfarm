import {Route, Routes} from "react-router-dom"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Notice from "./Pages/Notice";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Main" element={<Main/>} />
  <Route path="/Shop" element={<Shop/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Notice" element={<Notice/>} />
  <Route path="/Login" element={<Login/>} />
</Routes>
</>
  );
}

export default App;

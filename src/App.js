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
  <Route path="/Main/Shop" element={<Shop/>} />
  <Route path="/Main/About" element={<About/>} />
  <Route path="/Main/Notice" element={<Notice/>} />
  <Route path="/Main/Login" element={<Login/>} />
</Routes>
</>
  );
}

export default App;

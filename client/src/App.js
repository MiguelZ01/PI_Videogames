import { Routes, Route } from "react-router-dom";
import Home from "./Components/views/Home/Home";
import Detail from "./Components/views/Detail/Detail";
import Landing from "./Components/views/Landing/Landing";
import Create from "./Components/views/Create/Create";
import Error from "./Components/Error/Error";
import axios from "axios";
axios.defaults.baseURL = "https://videogames-45mq.onrender.com/";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;

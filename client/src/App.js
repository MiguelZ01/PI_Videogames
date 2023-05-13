import Home from "./Components/views/Home/Home";
import Detail from "./Components/views/Detail/Detail";
import Landing from "./Components/views/Landing/Landing";
import Nav from "./Components/Nav/Nav";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
   const { pathname } = useLocation();

   return (
      <div className="App">
         {pathname !== "/" && (
            <div>
               <Nav />
            </div>
         )}
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:Id" element={<Detail />} />
            <Route path="/" element={<Landing />} />
         </Routes>
      </div>
   );
}

export default App;

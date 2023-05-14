import Home from "./Components/views/Home/Home";
import Detail from "./Components/views/Detail/Detail";
import Landing from "./Components/views/Landing/Landing";
import Create from "./Components/views/Create/Create";
// import Nav from "./Components/Navbar/Navbar";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
   const { pathname } = useLocation();

   return (
      <div className="App">
         {pathname !== "/" && (
            <div>
               <home />
            </div>
         )}
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/create" element={<Create />} />
         </Routes>
      </div>
   );
}

export default App;

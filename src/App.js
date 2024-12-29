import { BrowserRouter,Route, Routes} from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import Dashboard from "./components/pages/Dashboard";


function App() {
  return (
   
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={ <Home />}/>
       <Route path="/contact" element={ <Contact />}/>
       <Route path="login" element={ <LoginReg />}/>
      
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// import Header from "./components/Header";
// import Card from "./components/card";
// import Todo from "./components/todocontent";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {

  const [users,setUser] = useState(
    [
        {username:"vish",
         password:"123"}
    ]
   )
  return (
<BrowserRouter>
<Routes>
  
  <Route>
<Route path='/' element={<Login users={users} setusers={setUser}  />}></Route>
<Route path='/signup' element={<Signup users={users} setusers={setUser}/>}></Route>
<Route path='/landing' element={<Landing/>}></Route>

  </Route>
</Routes>
</BrowserRouter>

   )
}

export default App;

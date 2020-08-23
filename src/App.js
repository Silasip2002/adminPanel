import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"

import Login from "./pages/login/Login.jsx";
import Admin from "./pages/admin/Admin.jsx" 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route  exact path="/" component={Admin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

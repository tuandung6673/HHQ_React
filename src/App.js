/* eslint-disable no-unused-vars */
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import {Switch} from "react-router"
import Header from './components/Header/Header';
import User from './layouts/user/User';
import Admin from './layouts/admin/Admin';

function App() {  
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/quan-tri" >
          <Admin></Admin>
        </Route>
        <Route path="/">
          <User></User>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


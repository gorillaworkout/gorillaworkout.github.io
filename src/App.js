import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Opening from './Pages/Home/Opening'
import Home4 from './Pages/Home/Home4'
import Portofolio from './Pages/Portofolio/Portofiolio'
import Loading from './Pages/Loading/Loading'
import {Switch,Route} from 'react-router-dom'
import initFontAwesome from "./Helpers/iniFontAwesome";
import TestOpening from './Pages/Home/testOpening'
import {toast} from 'react-toastify'  
import 'react-toastify/dist/ReactToastify.css' 

toast.configure()

function App() {
  
initFontAwesome();

  return (
    <Switch>
      <Route exact path='/' component={Opening}/>
      <Route exact path='/Home4' component={Home4}/>
      <Route exact path='/portofolio' component={Portofolio}/>
      <Route exact path='/loading' component={Loading}/>
      <Route exact path='/newHome' component={TestOpening}/>

    </Switch>
 
  );
}

export default App;

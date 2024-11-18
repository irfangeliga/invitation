import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Component} from 'react'
import NotFound from './NotFound'
import Invitation from './pages/invitation'
// import './App.css'

let name = window.location.pathname;
function App (){
  let page = "/agus+lisa";

    return(
    <Router>
        <Routes>
          {(name.indexOf("+")>0) && (<Route path={name} element={<Invitation name={name} />} />)}
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
    )
}

export default App

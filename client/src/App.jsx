import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

import PrivateRoute from './components/PrivateRoute'

import InfiniteScrollComponent from './pages/InifiniteScrolling.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/sign-in' element = {<SignIn/>} />
        <Route path='/sign-up' element = {<SignUp/>} />
        <Route element = {<PrivateRoute/>}> 
          <Route path='/dashboard' element = {<Dashboard/>} />
        </Route>
        <Route path='/projects' element = {<Projects/>} />
        <Route path='/scroll' element = {<InfiniteScrollComponent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
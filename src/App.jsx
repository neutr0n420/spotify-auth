// import { useState } from 'react'
import { Client, Account, ID } from 'appwrite'
import LoginPage from './components/LoginPage';
import Shope from './components/Shope';
import Home from './components/Home';
import { Link, Route, Router, Routes } from 'react-router-dom';

function App() {  

  const client = new Client()
  const account = new Account(client)
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('646bc6827fe1b3712550');
  const authentication = () => {
    account.createOAuth2Session('spotify')
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/shope">Shope</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element= {<LoginPage/>}/>
        <Route path='/shope' element= {<Shope/>}/>
      </Routes>
     {/* <LoginPage authentication={authentication}/> */}
    </>
  )
}

export default App

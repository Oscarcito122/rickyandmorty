import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState,useEffect} from 'react'
import {Routes,Route, useLocation,useNavigate} from "react-router-dom";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorite from "./components/Favorites/Favorites.jsx"


function App () {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState ([]);
  const location = useLocation ();
  const [access, setAccess] = useState(false);

  const username = 'oscarbergmann1106@gmail.com';
  const password = '1password';

  const login = (userData) => {
    if ( userData.username === username && userData.password === password ) {
       setAccess(true);
       navigate("/home");
    }
 }
 useEffect(() => {
  !access && navigate('/');
//eslint-disable-next-line
}, [access])

  const onSearch  = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters (
      characters.filter(character => character.id !== id)
    )

  }
  return (
    <div className='allContainer'>
      {location.pathname === "/" ? <Form  login={login} /> : <Nav  onSearch = {onSearch}  /> }
      <Routes>
        <Route path = "/about"  element = {<About/>}/>
        <Route path = "/home"  element = {<Cards onClose ={onClose} characters={characters} />}/>
        <Route path = "/detail/:detailId"  element = {<Detail/>}/>
        <Route path = "/favorites" element = {<Favorite/>} />
      </Routes>
    </div>
  )
}

export default App

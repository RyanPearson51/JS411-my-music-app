import {useState} from 'react';
//import OnlineCard from './components/OnlineCard';
//import VolumeCard from './components/VolumeCard';
//import QualityCard from './components/QualityCard'
import './App.css';
//import Switch from '@mui/material/Switch';
//import Grid from '@mui/material/Grid';
import TitleBar from './components/TitleBar';
import CardsMain from './components/CardsMain';
import Login from './components/Login'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  
  return (
    <div className='App'>
      <TitleBar/>
      {isLoggedIn ? <CardsMain /> : <Login handleClick={handleClick} />}
    </div>
  );
}

export default App;

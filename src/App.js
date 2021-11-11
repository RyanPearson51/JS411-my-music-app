import {useState} from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(true)
  const [isVolumeHigh, setIsVolumeHigh] = useState(false)
  
  return (
    <div className="App">
      
      <Card title='Online mode' body='Is this application connected to the internet?' state={isOnline} setState={setIsOnline} />
      <Card title='Master Volume' body='Overrides all other sound settings in this application' isOnline={isOnline} setIsOnline={setIsOnline}/>
      <Card title='Sound Quality' body='Maunally control the music quality in event of poor connection' isOnline={isOnline} setIsOnline={setIsOnline}/>
      {!isOnline && <ol>Your application is offline. You won't be able to share or stream music to other devices.</ol>}
    </div>
  );
}

export default App;

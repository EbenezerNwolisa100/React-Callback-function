import './App.css'
import { useState } from 'react';
import Callback from './components/callback';

function App() {

  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor (color);
  }

  return (
    <>
      <div className='App-color-container' style={{background: `${UIcolor}`}}></div>
      <Callback getColor={getColor} className='callback'/>
      <p>Just a liite practice with Callback function. It can take in any type of CSS Color Values</p>
    </>
  )
}

export default App

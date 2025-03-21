import { useState } from 'react';
import './App.css';
import Geolocation from './components/Geolocation/Geolocation';

const App = () => {

  const [cidade, setCidade] = useState('');

  return (
    <div id='appContainer'>
      <div id="local">
        <h1>{cidade || 'carregando cidade...'}</h1>
        <h2>dia da semana, data</h2>
      </div>
      <div id="status">
        <h2>temperatura</h2>
          <div id="subStatus">
          <h2>icone do clima</h2>
          <h2>velocidade do vento</h2>
          <h2>porcentagem de chance de chuva</h2>
        </div>
      </div>
      <Geolocation setCidade={setCidade} />
    </div>
  );
}

export default App;

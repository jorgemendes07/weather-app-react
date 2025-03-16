import './App.css'

const App = () => {

  return (
    <div id='appContainer'>
      <div id="local">
        <h1>nome da cidade</h1>
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
    </div>
  )
}

export default App

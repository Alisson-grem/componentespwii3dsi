import Gigi from './components/Gigi'
import Raora from './components/Raora'
import Cecilia from './components/Cecilia'
import Fuwamoco from './components/FUWAMOCO'
import Nerissa from './components/Nerissa'
import Bibbo from './components/Bibbo'
import Shiori from './components/Shiori'
import Kronii from './components/Kronii'
import Baelz from './components/Baelz'
import IRyS from './components/IRyS'
import './App.css'
function App() {

  const name = 'Elizabeth Rose Bloodflame'
  const newName = name.toUpperCase()

  function sum(a,b){

    return a + b
  }

const url = 'https://static.wikitide.net/hololivewiki/a/a0/Elizabeth_Rose_Bloodflame_-_Portrait_01.png'

  return (

    <div className = "App">
      <h1>Hololive Justice</h1>
      <p>Essa e {newName} </p>
      <p>Quanto e 2+2? {sum(2,1)}</p>
      <img src={url} alt='Elizabeth' />
      <Gigi />
      <Raora />
      <Cecilia />
      <Nerissa />
      <Shiori />
      <Bibbo />
      <Fuwamoco />
      <Kronii />
      <Baelz />
      <IRyS />
    </div>
  );
}

export default App

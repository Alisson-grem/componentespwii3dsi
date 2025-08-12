import Gigi from './components/Gigi'
import './App.css'
function App() {

  const name = 'Elizabeth Rose Bloodflame'
  const newName = name.toUpperCase()

const url = 'https://static.wikitide.net/hololivewiki/thumb/8/88/Elizabeth_Rose_Bloodflame_-_Full_Illustration_01.png/385px-Elizabeth_Rose_Bloodflame_-_Full_Illustration_01.png'

  return (

    <div className = "App">
      <h1>Hololive: Justice</h1>
      <p>Essa e {newName} </p>
      <img src={url} alt='Elizabeth' />
      <Gigi />
    </div>
  );
}

export default App

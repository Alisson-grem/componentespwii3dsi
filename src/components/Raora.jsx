import Cecilia from "./Cecilia";
function Raora() {
    const name = 'Raora Panthera'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/8/87/Raora_Panthera_-_Full_Illustration_01.png/385px-Raora_Panthera_-_Full_Illustration_01.png'
    return(
        <div className="Raora">
            <p>Essa e {newName}</p>
            <img src={url} alt='Raora' />
            <Cecilia />
        </div>
    );
}
export default Raora
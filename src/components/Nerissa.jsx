import Shiori from "./Shiori";
function Nerissa() {
    const name = 'Nerissa RavenCroft'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/0/02/Nerissa_Ravencroft_-_3D_Model.png/347px-Nerissa_Ravencroft_-_3D_Model.png'
    return(
        <div className="Nerissa">
            <h1>Hololive Advent</h1>
            <p>Essa e {newName}</p>
            <img src={url} alt='Nerissa' />
            <Shiori />
        </div>
    );
}
export default Nerissa
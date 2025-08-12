import Nerissa from "./Nerissa";
function Cecilia() {
    const name = 'Cecilia Immergreen'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/3/36/Cecilia_Immergreen_-_Full_Illustration_01.png/385px-Cecilia_Immergreen_-_Full_Illustration_01.png'
    return (
        <div className="Cecilia">
            <p>Essa e {newName}</p>
            <img src={url} alt='Cecilia' />
            <Nerissa />
        </div>
    );
}

export default Cecilia
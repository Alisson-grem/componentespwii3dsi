import Raora from "./Raora"
function Gigi() {
    const name = 'Gigi Murin'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/1/1d/Gigi_Murin_-_Full_Illustration_01.png/385px-Gigi_Murin_-_Full_Illustration_01.png'
    return (
        <div className="Gigi">
            <p>Essa e {newName}</p>
            <img src={url} alt='Gigi' />
            <Raora />
        </div>
        
    );
}

export default Gigi
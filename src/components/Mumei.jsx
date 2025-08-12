import Sana from "./Sana";
function Mumei () {
    const name = 'Nanashi Mumei (Graduada)'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/b/bd/Nanashi_Mumei_-_3D_Model_01.png/382px-Nanashi_Mumei_-_3D_Model_01.png'
    return(
        <div className="Mumei">
            <p>Essa e {newName}</p>
            <img src={url} alt='Mumei' />
            <Sana />
        </div>
    );
}
export default Mumei
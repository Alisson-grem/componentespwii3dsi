import Baelz from "./Baelz";
function Kronii () {
    const name = 'Ouro Kronii'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/1/1a/Ouro_Kronii_-_3D_Model_01.png/416px-Ouro_Kronii_-_3D_Model_01.png?20240319060758'
    return(
        <div className="Kronii">
            <h1>Hololive: Promise</h1>
            <p>Essa e {newName}</p>
            <img src={url} alt='Kronii' />
            <Baelz />
        </div>
    );
}
export default Kronii
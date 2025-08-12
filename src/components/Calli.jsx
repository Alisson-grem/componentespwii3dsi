import Kiara from "./Kiara";
function Calli () {
    const name = 'Mori Calliope'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/e/e5/Mori_Calliope_-_3D_Model_01-1.png/586px-Mori_Calliope_-_3D_Model_01-1.png?20241116075554'
    return(
        <div className="Calli">
            <h1>Hololive: Myth</h1>
            <p>Essa e {newName}</p>
            <img src={url} alt='Calli' />
            <Kiara />
        </div>
    );
}
export default Calli
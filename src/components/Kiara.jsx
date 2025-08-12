import Ina from "./Ina";
function Kiara () {
    const name = 'Takanashi Kiara'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/b/b7/Takanashi_Kiara_-_3D_Model_01.png/400px-Takanashi_Kiara_-_3D_Model_01.png'
    return(
        <div className="Kiara">
            <p>Essa e {newName}</p>
            <img src={url} alt='Kiara' />
            <Ina />
        </div>
    );
}
export default Kiara
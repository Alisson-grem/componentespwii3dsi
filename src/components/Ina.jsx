import Gura from "./Gura";
function Ina () {
    const name = 'Ninomae Ina|nis'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/6/6e/Ninomae_Ina%27nis_-_3D_Model_01.png/400px-Ninomae_Ina%27nis_-_3D_Model_01.png'
    return(
        <div className="Ina">
            <p>Essa e {newName}</p>
            <img src={url} alt='Ina' />
            <Gura />
        </div>
    );
}
export default Ina
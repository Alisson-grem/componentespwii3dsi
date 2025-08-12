import Mumei from "./Mumei";
function Fauna () {
    const name = 'Ceres Fauna (Graduada)'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/6/69/Ceres_Fauna_-_3D_Model_01.png/367px-Ceres_Fauna_-_3D_Model_01.png'
    return(
        <div className="Fauna">
            <p>Essa e {newName}</p>
            <img src={url} alt='Fauna' />
            <Mumei />
        </div>
    );
}
export default Fauna
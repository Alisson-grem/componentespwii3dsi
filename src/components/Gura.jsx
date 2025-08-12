import Amelia from "./Amelia";
function Gura () {
    const name = 'Gawr Gura (Graduada)'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/5/54/Gawr_Gura_-_3D_Model_01.png/400px-Gawr_Gura_-_3D_Model_01.png'
    return(
        <div className="Gura">
            <p>Essa e {newName}</p>
            <img src={url} alt='Gura' />
            <Amelia />
        </div>
    );
}
export default Gura
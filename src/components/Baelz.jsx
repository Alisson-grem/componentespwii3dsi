import IRyS from "./IRyS";
function Baelz () {
    const name = 'Hakos Baelz'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/4/48/Hakos_Baelz_-_3D_Model_01.png/347px-Hakos_Baelz_-_3D_Model_01.png?20240319060940'
    return(
        <div className="Baelz">
            <p>Essa e {newName}</p>
            <img src={url} alt='Baelz' />
            <IRyS />
        </div>
    );
}
export default Baelz
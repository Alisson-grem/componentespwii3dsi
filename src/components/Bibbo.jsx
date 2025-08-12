import Fuwamoco from "./FUWAMOCO";
function Bibbo() {
    const name = 'Koseki Bijou'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/c/c4/Koseki_Bijou_-_3D_Model.png/520px-Koseki_Bijou_-_3D_Model.png?20241026202143'
    return (
        <div className="Bibbo">
            <p>Essa e {newName}</p>
            <img src={url} alt='Bibbo' />
            <Fuwamoco />
        </div>
    );
}

export default Bibbo
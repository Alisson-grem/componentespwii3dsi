import Bibbo from "./Bibbo";
function Shiori() {
    const name = 'Shiori Novella'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/0/0c/Shiori_Novella_-_3D_Model.png/347px-Shiori_Novella_-_3D_Model.png'
    return(
        <div className="Shiori">
            <p>Essa e {newName}</p>
            <img src={url} alt='Shiori' />
            <Bibbo />
        </div>
    );
}
export default Shiori
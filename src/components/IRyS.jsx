import Fauna from "./Fauna"
function IRyS () {
    const name = 'IRyS'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/5/57/IRyS_-_3D_Model.png/385px-IRyS_-_3D_Model.png?20231124052752'
    return(
        <div className="IRyS">
            <p>Essa e {newName}</p>
            <img src={url} alt='IRyS' />
            <Fauna />
        </div>
    );
}
export default IRyS
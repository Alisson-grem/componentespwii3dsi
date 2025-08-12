import Kronii from "./Kronii"
function Fuwamoco () {
    const name = 'Fuwawa e Mococo'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/f/f7/Fuwawa_Abyssgard_-_3D_Model.png/347px-Fuwawa_Abyssgard_-_3D_Model.png'
    const url1 = 'https://static.wikitide.net/hololivewiki/thumb/2/23/Mococo_Abyssgard_-_3D_Model.png/347px-Mococo_Abyssgard_-_3D_Model.png'
    return(
        <div className="Fuwamoco">
            <p>Essas são {newName}</p>
            <img src={url} alt='Fuwawa' />
            <img src={url1} alt='Mococo' />
            <Kronii />
        </div>
    );
}
export default Fuwamoco
function Fuwamoco () {
    const name = 'Fuwawa e Mococo'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/c/c1/FUWAMOCO_-_Portrait_01.png/300px-FUWAMOCO_-_Portrait_01.png'
    return(
        <div className="Fuwamoco">
            <p>Essas são {newName}</p>
            <img src={url} alt='Fuwamoco' />
        </div>
    );
}
export default Fuwamoco
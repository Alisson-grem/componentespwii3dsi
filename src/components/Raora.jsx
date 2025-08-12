function Raora() {
    const name = 'Raora Panthera'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/c/c2/Raora_Panthera_-_Portrait_01.png/318px-Raora_Panthera_-_Portrait_01.png'
    return(
        <div className="Raora">
            <p>Essa e {newName}</p>
            <img src={url} alt='Raora' />
        </div>
    );
}
export default Raora
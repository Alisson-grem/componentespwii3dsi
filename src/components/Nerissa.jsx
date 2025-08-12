function Nerissa() {
    const name = 'Nerissa RavenCroft'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/3/3c/Nerissa_Ravencroft_-_Portrait_01.png/300px-Nerissa_Ravencroft_-_Portrait_01.png'
    return(
        <div className="Nerissa">
            <h1>Hololive Advent</h1>
            <p>Essa e {newName}</p>
            <img src={url} alt='Nerissa' />
        </div>
    );
}
export default Nerissa
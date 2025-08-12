function Kronii () {
    const name = 'Ouro Kronii'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/a/a1/Ouro_Kronii_-_Portrait_01.png/280px-Ouro_Kronii_-_Portrait_01.png'
    return(
        <div className="Kronii">
            <h1>Hololive Promise</h1>
            <p>Essa e {newName}</p>
            <img src={url} alt='Kronii' />
        </div>
    );
}
export default Kronii
function Baelz () {
    const name = 'Hakos Baelz'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/1/16/Hakos_Baelz_-_Portrait_01.png/280px-Hakos_Baelz_-_Portrait_01.png'
    return(
        <div className="Baelz">
            <p>Essa e {newName}</p>
            <img src={url} alt='Baelz' />
        </div>
    );
}
export default Baelz
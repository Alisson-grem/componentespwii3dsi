function Gigi() {
    const name = 'Gigi Murin'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/0/03/Gigi_Murin_-_Portrait_01.png/313px-Gigi_Murin_-_Portrait_01.png'
    return (
        <div className="Gigi">
            <p>Essa e {newName}</p>
            <img src={url} alt='Gigi' />
        </div>
    );
}

export default Gigi
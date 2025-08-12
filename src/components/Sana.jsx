function Sana () {
    const name = 'Tsukumo Sana (Graduada)'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/a/a9/Tsukumo_Sana_-_Full_Illustration_01.png/371px-Tsukumo_Sana_-_Full_Illustration_01.png'
    return(
        <div className="Kronii">
            <p>Essa e {newName}</p>
            <img src={url} alt='Kronii' />
        </div>
    );
}
export default Sana
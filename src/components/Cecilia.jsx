function Cecilia() {
    const name = 'Cecilia Immergreen'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/0/0d/Cecilia_Immergreen_-_Portrait_01.png/313px-Cecilia_Immergreen_-_Portrait_01.png'
    return (
        <div className="Cecilia">
            <p>Essa e {newName}</p>
            <img src={url} alt='Cecilia' />
        </div>
    );
}

export default Cecilia
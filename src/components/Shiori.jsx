function Shiori() {
    const name = 'Shiori Novella'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/0/03/Shiori_Novella_-_Portrait_01.png/300px-Shiori_Novella_-_Portrait_01.png'
    return(
        <div className="Shiori">
            <p>Essa e {newName}</p>
            <img src={url} alt='Shiori' />
        </div>
    );
}
export default Shiori
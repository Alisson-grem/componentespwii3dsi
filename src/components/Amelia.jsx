function Amelia () {
    const name = 'Amelia Watson (Graduada)'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/9/90/Watson_Amelia_-_3D_Model_01.png/400px-Watson_Amelia_-_3D_Model_01.png'
    return(
        <div className="Amelia">
            <p>Essa e {newName}</p>
            <img src={url} alt='Amelia' />
        </div>
    );
}
export default Amelia
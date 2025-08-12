function Bibbo() {
    const name = 'Koseki Bijou'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/9/9f/Koseki_Bijou_-_Portrait_01.png/300px-Koseki_Bijou_-_Portrait_01.png'
    return (
        <div className="Bibbo">
            <p>Essa e {newName}</p>
            <img src={url} alt='Bibbo' />
        </div>
    );
}

export default Bibbo
function IRyS () {
    const name = 'IRyS'
    const newName = name.toUpperCase()

    const url = 'https://static.wikitide.net/hololivewiki/thumb/d/dc/IRyS_-_Portrait_02.png/280px-IRyS_-_Portrait_02.png'
    return(
        <div className="IRyS">
            <p>Essa e {newName}</p>
            <img src={url} alt='IRyS' />
        </div>
    );
}
export default IRyS
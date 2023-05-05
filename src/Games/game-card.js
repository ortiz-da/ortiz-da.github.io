const GameCard = ({title, date, description, img, url}) => {
    return (
        // https://stackoverflow.com/questions/53182024/move-image-to-right-of-card-in-bootstrap*/

        <div className="card my-5">
            <div className="row card-body">
                <div className="col-sm-6">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-subtitle text-muted">{date}</p>
                    <hr/>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Play</a>
                </div>
                <img className="col-sm-6 "
                     src={img}
                     alt="sans"/>
            </div>
        </div>

    )
}

export default GameCard
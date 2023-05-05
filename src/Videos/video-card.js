const VideoCard = ({description, url}) => {
    return (
        <div className={"row my-5"}>
            <div className={"col-6"}><p>{description}</p></div>
            <div className={"col-6"}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className={"embed-responsive-item"} width="560" height="315" src={url}
                            title="YouTube video player" frameBorder="0"
                            allowFullScreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default VideoCard

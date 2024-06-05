import image from "../assets/img.jpg";


const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light md-3 d-inline-block my-3 mx-3 px-2 py2" style={{ Height: "450px", Width: "345px" }}>
            <img src={src ? src : image} style={{ height: "190px", width: "330px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "President Joe Biden’s description of Israel’s cease-fire proposal was “not accurate,” a senior Israeli official has told NBC News, as doubts grew Monday over the U.S. ally's stance on the deal."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
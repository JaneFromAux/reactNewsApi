const NewsItems = (props) => {
    return (
        <div className="newsCard">
            <h5>Tech Crunch</h5>
            <h3>{props.title}</h3>
            <h5>Written by {props.author}, published at {props.publishedAt}</h5>
            <img src={props.urlToImage} alt="" />
            <h4>{props.content}</h4>
            <a href={props.url}>Read more</a>
        </div>

    );
}

export default NewsItems;
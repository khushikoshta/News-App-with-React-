export default function News(props)
{

    return (
      <div className="news">
        <div className="news-img">
          {/* {props.article.urlToImage} !== null? */}
          <img src={props.article.urlToImage}></img>
          
           {/* <img src="https: //static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"></img> */}
        </div>
        <h1>{props.article.title}</h1>
        <p>
          {props.article.description?.substring(0, 100)}...
          <a href={props.article.url} target="_blank">
            {" "}
            Read more
          </a>{" "}
        </p>

        <div className="source">
          <p>{props.article.author}</p>
          <p>{props.article.source.name}</p>
        </div>
      </div>
    );
}
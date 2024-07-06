import React from 'react';

const Newsitem =(props)=>{

    // Destructure props
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card" style={{ position: "relative" }}>
          <div>
          <span className="badge rounded-pill bg-danger">{source}
            </span>
          </div>

          <img src={imageUrl ? imageUrl : "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg"} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} updated on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;

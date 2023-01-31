import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '93%', zIndex: '1' }}> {source}</span>
                    <img
                        src={
                            imageUrl
                                ? imageUrl
                                : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/astro_it43_10-sixteen_nine.jpg?VersionId=6lALrHYxg8ZGpQ5i0GBOQN6rm6NKVS8n"
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author ? author : "Unknown"} on{" "}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn btn-sm btn-dark"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;

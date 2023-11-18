import React from 'react';

const NewsListItem = ({article, isReverse}) => {
    return (
        <div className={`shadow d-flex row mb-5 ${isReverse ? "flex-row-reverse" : ""}`}>
            <img
                width={300}
                height={400}
                src={article.image}
                className="col-md-3 col-12"
                alt="Image"
            />
            <div className="p-3 col-md-9 col-12">
                <div className="h3">{article.title}</div>
                <div className="text-secondary">{article.date}</div>
                {article.info.map((str, index) => (
                    <p key={index + new Date()}>{str}</p>
                ))}
            </div>
        </div>
    );
};

export default NewsListItem;

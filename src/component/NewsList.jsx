import React from 'react';
import NewsListItem from "./NewsListItem";

const NewsList = ({news, title}) => {
    return (
        <div className="px-lg-5 px-1 d-flex flex-column">
            <div className="h1 text-center mb-3">{title}</div>
            {news.map((article, index) => (
                <NewsListItem isReverse={index % 2 !== 0} article={article} key={article.title}/>
            ))}
        </div>
    );
};

export default NewsList;

import React from 'react';
import NewsList from "../component/NewsList";
import {news} from "../models/news";

const News = () => {
    return (
        <>
            <NewsList title={"Новини"} news={news}/>
        </>
    );
};

export default News;

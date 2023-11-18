import React from 'react';
import MainCarousel from "../component/MainCarousel";
import NewsList from "../component/NewsList";
import {news} from "../models/news";

const Main = () => {
   const actualNews = news.slice(0, 3)
    return (
        <>
            <MainCarousel/>
            <NewsList title={"Актуальні новини"} news={actualNews}/>
        </>
    );
};

export default Main;

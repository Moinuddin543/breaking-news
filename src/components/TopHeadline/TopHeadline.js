import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7f7c9caba314476795cfe2c0f4f3c6eb'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>TopHeadline: {articles.length}</h1>
            {
                articles.map(article => <News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;
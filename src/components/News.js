import NewsItems from './NewsItems';
import { useState, useEffect } from 'react';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=82240964e93349ecb3f4d721af5d4318')
            .then(res => res.json())
            .then(json => {
                setNews(json.articles)
            })
    }, [])
    console.log(news);

    return (
        <section className="griddle">
            {
                news.map((ele, i) =>
                    <NewsItems
                        key={i}
                        title={ele.title}
                        author={ele.author}
                        publishedAt={ele.publishedAt}
                        description={ele.description}
                        urlToImage={ele.urlToImage}
                        content={ele.content}
                        url={ele.url}
                    />
                )
            }
        </section>
    );
}

export default News;
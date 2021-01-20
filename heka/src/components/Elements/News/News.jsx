import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import styles from './News.module.scss'

export const News = () => {

    const [apiData, setApiData] = useState([]);

    const url = "https://api.mediehuset.net/bakeonline/news";
    const getNews = async () => {
        let result = await doFetch(url);
        setApiData(result);
    }

    useEffect(() => {
        getNews();
    }, [])  

    return (
        <section className={styles.news}>
            {apiData.news && apiData.news.map((item, i) => {
                if(i < 3) {
                    return (
                        <article key={item.id}>
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                            <h4>{item.title}</h4>
                            <p>{item.teaser}</p>
                        </article>
                    )    
                } else {
                    return null
                }
            })

            }
        </section>
    )
}
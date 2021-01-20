import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import styles from './ProductList.module.scss';
import icon from '../../Assets/images/icons/icon-comments.png';

export const ProductList = () => {

    const [apiData, setApiData] = useState([]);

    const url = "https://api.mediehuset.net/bakeonline/products";
    const getProductList = async () => {
        let result = await doFetch(url);
        setApiData(result);
    }

    useEffect(() => {
        getProductList();
    }, [])  

    return (
        <>
            <h2>Nyeste produkter</h2>
            <section className={styles.products}>
                {apiData.products && apiData.products.map((item, i) => {                    
                    if(i < 6) {
                        return (
                            <article key={item.id}>
                                <div style={{backgroundImage: `url(${item.image.fullpath})`}}></div>
                                <div className={styles.num_comments}>
                                    {item.num_comments}
                                    <img src={icon} alt=""/>
                                </div>
                                <h4>{item.title.substring(0, 28) + '...'}</h4>
                                <p>{item.teaser.substring(0, 180) + '...'}</p>
                                <p><a href="/">Se mere</a></p>
                            </article>
                        )    
                    } else {
                        return null
                    }
                })

                }
            </section>
        </>
    )
}
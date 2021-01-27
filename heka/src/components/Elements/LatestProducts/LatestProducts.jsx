import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import styles from './LatestProducts.module.scss';

export const LatestProducts = () => {

    const [apiData, setApiData] = useState([]);

    const url = "https://api.mediehuset.net/bakeonline/products";
    const getLatestProducts = async () => {
        let result = await doFetch(url);
        setApiData(result);
    }

    useEffect(() => {
        getLatestProducts();
    }, [])  

    return (
        <>
            <h2>Nyeste produkter</h2>
            <section className={`flex ${styles.productlist}`}>
                {apiData.items && apiData.items.map((item, i) => {                    
                    if(i < 6) {
                        return (
                            <ProductListItem data={item} />
                        )    
                    } else {
                        return null
                    }
                })}
            </section>
        </>
    )
}
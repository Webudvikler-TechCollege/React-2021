import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doFetch } from '../../../helpers/fetch';
import styles from './ProductDetails.module.scss';

export function ProductDetails() {

    const [product, setProductDetails] = useState([]);
    let { productId } = useParams();

    useEffect(() => {
        const getProductDetails = async () => {
            let url = `https://api.mediehuset.net/bakeonline/products/${productId}`
            let result = await doFetch(url)
            setProductDetails(result);
        } 
        getProductDetails();
    }, [productId])

    return product.item ? (

        <div className={styles.productdetail}>
            <article>
                <h4>{product.item.title}</h4>
                <figure><img src={product.item.image.fullpath} alt=""/></figure>
                <div>{product.item.description}</div>
            </article>
            <aside>
                {product.item.ingredients.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.ingredient_title}</p>
                        </div>
                    )
                    
                })}
            </aside>
        </div>
    ) : null
}
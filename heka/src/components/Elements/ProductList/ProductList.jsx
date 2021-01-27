import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doFetch } from '../../../helpers/fetch';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import styles from './ProductList.module.scss';


export function ProductList() {

    const { categoryId } = useParams();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getProductList = async () => {
            const url = `https://api.mediehuset.net/bakeonline/categories/${categoryId}`;
            const result = await doFetch(url);
            setProductList(result);
        }

        getProductList();
    }, [categoryId])

    return (
        <div className={`flex ${styles.productlist}`}>
            {productList && productList.item && productList.item.products && productList.item.products.map((product, index) => {
                return (
                    <ProductListItem key={product.id} data={product} />
                )
            })
        }
        </div>
    )

}
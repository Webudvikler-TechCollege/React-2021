import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import styles from './ProductCatalog.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';

const Container = props => {
    const [categoryData, setCategoryData] = useState(null);

    return (
        <div className={`${styles.catalog} container grid`}>
            <aside>
                <CategoryList setCategoryData={setCategoryData} />
            </aside>
            <section>
                <ProductList data={categoryData} />                
            </section>
        </div>
    )
}

const CategoryList = props => {
    const { setCategoryData } = props;
    const [apiData, setApiData] = useState(null);

    const url = "https://api.mediehuset.net/bakeonline/categories";

    const getCategories = async () => {
        const result = await doFetch(url);
        setApiData(result);
    }    

    const getProductList = async (id) => {
        const url = `https://api.mediehuset.net/bakeonline/categories/${id}`;
        const result = await doFetch(url);
        setCategoryData(result);
    }

    useEffect(() => {
        if(!apiData) {
            getCategories();
        }
    }, [apiData, setApiData])

    return (
        <ul className={styles.categories}>
        {
            apiData && apiData.items && apiData.items.map((item, i) => {
                return (
                    <li key={item.id} onClick={e => getProductList(item.id) }>
                        {item.title}
                    </li>
                )
            })
        }
        </ul>
    )
}

const ProductList = props => {
    const { data } = props;

    return (
        <div className={`flex ${styles.productlist}`}>
            {data && data.item && data.item.products && data.item.products.map(product => (
                <ProductListItem key={product.product_id} data={product} />
            ))}
        </div>
    )

}

export const ProductCatalog = () => {
    return (
        <Container />
    )
}
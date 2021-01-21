import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import { Link } from 'react-router-dom';
import styles from './CategoryList.module.scss';

export const CategoryList = () => {

    const [apiData, setApiData] = useState([]);

    const url = "https://api.mediehuset.net/bakeonline/categories";

    const getCategories = async () => {
        const result = await doFetch(url);
        setApiData(result);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className={`container ${styles.categories}`}>
        {
            apiData.categories && apiData.categories.map((item, i) => {
                return (
                    <p key={item.id}><Link to={`/products?id=${item.id}`}>{item.title}</Link></p>
                )
            })
        }
        </div>
    )
}
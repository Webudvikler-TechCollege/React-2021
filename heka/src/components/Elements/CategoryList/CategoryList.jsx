import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';

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
        <div className="container">
        {
            apiData.categories && apiData.categories.map((item, i) => {
                return (
                    <p>{item.title}</p>
                )
            })
        }
        </div>
    )
}
import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
//import { Link } from 'react-router-dom';

export const ProductList = () => {

    const [apiData, setApiData] = useState([]);

    const url = "https://api.mediehuset.net/bakeonline/categories/";

    const getProducts = async () => {
        const result = await doFetch(url);
        setApiData(result);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="container">
        {
            console.log(apiData)
        }
        </div>
    )
}
import { useState, useEffect } from 'react';

export const Home = () => {

    const [apiData, setApiData] = useState(0);
    const url = "https://api.mediehuset.net/bakeonline/news";

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => setApiData(result))
        .catch(error => console.log('error', error));

    return (
        <>
            <h1>Velkommen til bageriet</h1>
        </>
    )
}
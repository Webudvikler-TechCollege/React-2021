import { useState, useEffect } from 'react';
import { doFetch } from '../../../helpers/fetch';
import styles from './SignUp.module.scss'

export const SignUp = () => {
    const [mail, setMail] = useState([]);

    const submit2Newsletter = async (e) => {

        e.preventDefault()

        let url = "https://api.mediehuset.net/bakeonline/newsletter";
        let formData = URLSearchParams();
        formData.append('email');
        let result = await doFetch(url, formData, 'POST');
    }

    return (
        <section className={styles.newsletter}>
            <section className="container">
                <h2>Tilmeld dig vores nyhedsbrev</h2>
                <form>
                    <input type="email" placeholder="Indtast email" />
                </form>
            </section>
        </section>
    )
}
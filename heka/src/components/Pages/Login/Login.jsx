import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { doFetch } from '../../../helpers/fetch';
import styles from './Login.module.scss';


export const Login = () => {

    const onSubmit = (data, e) => sendLoginRequest(data, e);
    const { register, handleSubmit, errors } = useForm();
    const [loginData, setLoginData] = useState("");
    const [message, setMessage] = useState("");

    const sendLoginRequest = async (data, e) => {
        e.target.reset();
        let formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);

        let url = "https://api.mediehuset.net/token";

        let result = await doFetch(url, 'POST', formData);
        handleSessionData(result);
    }

    const handleSessionData = (res) => {
        if(!res.message) {
            setLoginData(res);
            sessionStorage.setItem('token', JSON.stringify(res))
        }
    }

    const logOut = () => {
        setLoginData([]);
        sessionStorage.removeItem('token');
        setMessage('Du er nu logget ud!');

        let timer = setTimeout(() => {
            setMessage("Indtast Login oplysninger")
            clearTimeout(timer);
        }, 3500)
    }


    return (
        <div className="container">
            <h1>Login</h1>

            <p>{loginData && loginData.username ? `Du er logget ind som ${loginData.username}` : message} </p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.loginform}>
                <div>
                    <label htmlFor="username">Brugernavn</label>
                    <input type="text" id="username" name="username" ref={register({required: true})} />
                    {errors.fullname && errors.fullname.type === 'required' && <span>Du skal indtaste dit brugernavn</span>}
                </div>
                <div>
                    <label htmlFor="password">Adgangskode</label>
                    <input type="password" id="password" name="password" ref={register({required: true})} />
                    {errors.email && <span>Du skal indtaste din adgangskode</span>}
                </div>
                <div>
                    {!loginData.user_id && 
                        <button type="submit">Send</button>
                    }
                    {loginData.user_id && 
                        <button onClick={() => {logOut() }}>Logout</button>
                    }
                    <button type="reset">Annuller</button>
                </div>
            </form>

        </div>
    )
}
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './ProductListItem.module.scss';

export const ProductListItem = props => {
    let { url } = useRouteMatch();

    const handleClick = () => {
        let myurl = `${url}/${props.data.id}`;
        window.location.href = myurl;
    }

    return (
        <article className={styles.productitem} key={props.data.id} onClick={() => {handleClick()}}>
            <div style={{backgroundImage: `url(${props.data.image.fullpath})`}}></div>
            <h4>{props.data.title}</h4>
            <p>{props.data.teaser}</p>
        </article>
    ) 

}
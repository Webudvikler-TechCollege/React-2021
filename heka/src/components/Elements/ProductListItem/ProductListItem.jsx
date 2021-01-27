import { Link, useRouteMatch } from 'react-router-dom';
import styles from './ProductListItem.module.scss';

export const ProductListItem = props => {
    let { url } = useRouteMatch();

    return (
        <article className={styles.productitem} key={props.data.id}>
            <div style={{backgroundImage: `url(${props.data.image.fullpath})`}}></div>
            <div className={styles.num_comments}>
                {props.data.num_comments}
                <img src={require('../../Assets/images/icons/icon-comments.png').default} alt=""/>
            </div>
            <h4>{props.data.title.substring(0, 20) + '...'}</h4>
            <p>{props.data.teaser.substring(0, 150) + '...'}</p>
            <p><Link to={`${url}/${props.data.id}`}>Læs mere</Link></p>
        </article>
    ) 

}
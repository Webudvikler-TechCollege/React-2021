import styles from './ProductListItem.module.scss';
import icon from '../../Assets/images/icons/icon-comments.png';

export const ProductListItem = props => {
    console.log(props);
    return (
        <article className={styles.productlistitem} key={props.data.id}>
            <div style={{backgroundImage: `url(${props.data.image.fullpath})`}}></div>
            <div className={styles.num_comments}>
                {props.data.num_comments}
                <img src={icon} alt=""/>
            </div>
            <h4>{props.data.title.substring(0, 28) + '...'}</h4>
            <p>{props.data.teaser.substring(0, 180) + '...'}</p>
            <p><a href="/">Se mere</a></p>
        </article>
    ) 

}
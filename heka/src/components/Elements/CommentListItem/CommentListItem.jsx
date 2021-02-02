import styles from './CommentListItem.module.scss';

export const CommentListItem = props => {
    console.log(props);

    const convertTime = (stamp) => {
        let friendly = new Date(stamp * 1000).toLocaleDateString('da-DK');
        return friendly;
    }

    return (
        <div className={styles.commentitem}>
            <h4>{props.data.title}</h4>
            <span>{`${props.data.user.username}, ${convertTime(props.data.created)}`}</span>
            <p>{props.data.comment}</p>
            {
                props.data.user.username === props.loginData.username ? (
                    <button onClick={() => props.delete(props.data.id)}>Slet</button>
                ) : null
            }
        </div>
    )
}
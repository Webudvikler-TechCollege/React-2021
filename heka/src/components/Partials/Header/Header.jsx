import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';

export const Header = (props) => {
    return (
        <header className={styles.subheader}>
            <Nav />
        </header>  
    )
}
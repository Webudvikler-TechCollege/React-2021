import styles from "./Header.module.scss";
import { Nav } from '../Nav/Nav';

export const Header = (props) => {
    return (
        <header>
            <Nav />
        </header>  
    )
}
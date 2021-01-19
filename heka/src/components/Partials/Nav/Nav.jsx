import styles from "./Nav.module.scss";

export const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Forside</a></li>
                <li><a href="/">Produkter</a></li>
                <li id="logo">Bageriet</li>
                <li><a href="/">Kontakt</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}
import styles from "./Nav.module.scss";

export const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Forside</a></li>
                <li><a href="/products">Produkter</a></li>
                <h2 className={styles.logo}>bageriet</h2>
                <li><a href="/contact">Kontakt</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}
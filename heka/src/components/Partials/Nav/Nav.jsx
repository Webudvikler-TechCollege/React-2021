import styles from "./Nav.module.scss";

export const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Forside</a></li>
                <li><a href="/products">Produkter</a></li>
                <p className={styles.logo}>Bageriet</p>
                <li><a href="/contact">Kontakt</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}
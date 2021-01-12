import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div>
            <section className={`${styles.hero} ${styles.flex}`}>
                <div>
                    <a href="index.html"><img src="/images/layout/KT-Logo.png" alt="Logo" /></a>
                </div>            
                <article>
                    <p>"Det er rigtigt, at vi hver især kun bidrage lidt til den samlede løsning"</p>
                    <p>"Lige så vigtigt er det, at vi slet ikke kan nå målet, uden at hver især bidrager en smule til det"</p>
                </article>            
            </section>        
            <header>
                <nav id="nav"></nav>
            </header>  
        </div>        
    )
}

export default Header;
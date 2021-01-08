import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="container-join-us flex-container">
                    <article className="flex-col-2">
                        <h3>KlimaTossen NPO</h3>
                        <p>Vesterbrogade 92</p>
                        <p>9000 Aalborg</p>
                        <a href="mailto:info@klima-tossen.dk">info@klima-tossen.dk</a>
                        <p><a href="tel:99223344">9922 3344</a> (Åben man - fre: 08.00 - 16.00)</p>
                        <h3>SAMARBEJDSPARTNERE:</h3>
                        <a className="underline" href="https://www.dn.dk/" target="_blank" rel="noreferrer">https://www.dn.dk/</a><br />
                        <a className="underline" href="http://www.miljoeportal.dk/" target="_blank" rel="noreferrer">http://www.miljoeportal.dk/</a>
                        <img className="logo-footer-desktop" src="/images/layout/LOGO-FOOTER.png" alt="Logo Footer" />
                    </article>
                    <article className="flex-col-2">
                        <h3>Ja tak! Jeg vil gerne høre mere.</h3>
                        <form className={styles.contactform} method="GET">
                            <div className="container-contact-form">
                                <div className="text-input">
                                    <input type="text" id="full-name" name="full-name" placeholder="Fulde navn" />
                                    <input type="text" id="home-town" name="home-town" placeholder="Hjem by" />
                                    <input type="email" id="email-address" name="email-address" placeholder="Email adresse" />
                                    <input type="text" id="phone-number" name="phone-number" placeholder="Telefon nummer" />
                                </div>

                                <div className="checkbox-inputs">
                                    <div className="container-mail-me">
                                        <label className="checkbox" id="mail-me-label" htmlFor="mail-me">Få en samtale med Klimatossen</label>
                                        <input type="checkbox" name="mail-me" id="mail-me" />
                                    </div>
        
                                    <div className="container-call-me">
                                        <label className="checkbox" id="call-me-label" htmlFor="call-me">Modtag Nyhedsbrev</label>
                                        <input type="checkbox" name="call-me" id="call-me" />
                                    </div>
                                </div>

                                <div className="container-buttons">
                                    <input type="submit" value="Send" />
                                </div>
                                <div id="message"></div>
                            </div>
                        </form>
                    </article>
                    <img className="logo-footer-mobile" src="/images/layout/LOGO-FOOTER.png" alt="Logo Footer" />                    
                </div>
            </section>
        </footer>        
    )    
}

export default Footer;
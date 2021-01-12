import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <article>
                        <h3>KlimaTossen NPO</h3>
                        <p>Vesterbrogade 92</p>
                        <p>9000 Aalborg</p>
                        <a href="mailto:info@klima-tossen.dk">info@klima-tossen.dk</a>
                        <p><a href="tel:99223344">9922 3344</a> (Åben man - fre: 08.00 - 16.00)</p>
                        <h3>SAMARBEJDSPARTNERE:</h3>
                        <a href="https://www.dn.dk/" target="_blank" rel="noreferrer">https://www.dn.dk/</a><br />
                        <a href="http://www.miljoeportal.dk/" target="_blank" rel="noreferrer">http://www.miljoeportal.dk/</a>
                        <img src="/images/layout/LOGO-FOOTER.png" alt="Logo Footer" />
                    </article>
                    <article>
                        <h3>Ja tak! Jeg vil gerne høre mere.</h3>
                        <form method="GET">
                            <div>
                                <div>
                                    <input type="text" id="full-name" name="full-name" placeholder="Fulde navn" />
                                    <input type="text" id="home-town" name="home-town" placeholder="Hjem by" />
                                    <input type="email" id="email-address" name="email-address" placeholder="Email adresse" />
                                    <input type="text" id="phone-number" name="phone-number" placeholder="Telefon nummer" />
                                </div>

                                <div>
                                    <div>
                                        <label id="mail-me-label" htmlFor="mail-me">Få en samtale med Klimatossen</label>
                                        <input type="checkbox" name="mail-me" id="mail-me" />
                                    </div>
        
                                    <div>
                                        <label id="call-me-label" htmlFor="call-me">Modtag Nyhedsbrev</label>
                                        <input type="checkbox" name="call-me" id="call-me" />
                                    </div>
                                </div>

                                <div>
                                    <input type="submit" value="Send" />
                                </div>
                                <div id="message"></div>
                            </div>
                        </form>
                    </article>
                    <img src="/images/layout/LOGO-FOOTER.png" alt="Logo Footer" />                    
                </div>
            </section>
        </footer>        
    )    
}

export default Footer;
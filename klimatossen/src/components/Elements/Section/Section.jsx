import styles from './Section.module.scss';
console.log(styles);

const Section = (props) => {
    const boxstyle = `${styles[props.data.class]} ${styles.box}`;

    return (
        <section className={boxstyle}>
            <article>
                <h2>{props.data.header}</h2>
                <section className="flexbox iconwrapper">
                    <div>
                        <img src={'/images/layout/' + props.data.image} alt="Icon CO2" />
                    </div>
                </section>
            </article>
        </section>
    )
}

export default Section;
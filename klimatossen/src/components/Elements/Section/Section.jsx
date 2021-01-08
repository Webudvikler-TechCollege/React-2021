const Section = (props) => {
    return (
        <section className={'container-' + props.id}>
            <article>
                <h2>{props.header}</h2>
                <section>
                    <div className="flex-item-1 flex-col-2">
                        <img src={'/images/layout/' + props.image} alt="Icon CO2" />
                    </div>
                </section>
            </article>
        </section>
    )
}

export default Section;
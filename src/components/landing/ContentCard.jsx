
export default function ContentCard ({content}) {
    return (

        <section className="section">
            <div className="section-padding">
                <div className="content-card-component">
                    <img src="{content.image}" alt="" />
                    <h1 className="hero-heading">{content.title}</h1>
                    
                </div>

            </div>
        </section>
    )
}
import { Link } from "react-router-dom"
import '../../App.css'
import './Hero.css'

export default function Hero ({content}){
    
    return (
        <section className="hero-section">
            <div className="section-padding">
                <div className="hero-component">
                    <h1 className="hero-heading">{content.hero.headline}</h1>
                    <p className="hero-text">{content.hero.subtext}</p>
                    <div className="button-group">
                    <Link className="button" to={content.hero.buttonLink}>{content.hero.buttonText}</Link>
                    <Link className="button" to="/add">Add property</Link>
                    </div>
                </div>

            </div>
        </section>
    )

}
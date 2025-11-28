import { useEffect, useState } from "react"
import Hero from "../components/landing/Hero.jsx"
import ContentCard from "../components/landing/ContentCard.jsx"
import BenefitsSection from "../components/landing/BenefitsSection.jsx"



export default function About() {

  const [content, setContent] = useState(null)

useEffect(()=>{
  const data = fetch("/landing-content.json")
  .then(res => res.json())
  .then(data => setContent(data))
  .catch(err => console.error(err))
}, [])


  if (!content) return <p>Loading...</p>;


  return (<>

  <Hero content={content}/>
  <ContentCard content={content.cardsSectionOne} />
  <BenefitsSection content={content.features}/>

  
  </>)
}


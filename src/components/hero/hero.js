import React from "react"
import HeroStyles from "./hero.module.css"
import hero from "../../images/hero.png"
import { ContainerCircle } from "../container/container"

export default function Hero({ children, className }) {
  return (
    <section className={`${HeroStyles.hero} ${className}`}>{children}</section>
  )
}

export function HeroImage() {
  return (
    <Hero className={HeroStyles.hero__image}>
      <ContainerCircle className={HeroStyles.container}>
        <img src={hero} className={HeroStyles.image} />
      </ContainerCircle>
    </Hero>
  )
}

export function HeroText() {
  return (
    <Hero className={HeroStyles.hero__text}>
      <h1>Bienvenue</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum,
        justo in condimentum ullamcorper, dolor lacus ornare sem, sit amet
        auctor nisi diam eget arcu.
      </p>
    </Hero>
  )
}

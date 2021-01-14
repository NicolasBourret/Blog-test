import React from "react"
import { HeroImage } from "../hero/hero"
import SectionImageStyles from "./sectionimage.module.css"

export default function sectionImage() {
  return (
    <div className={SectionImageStyles.image}>
      <HeroImage />
    </div>
  )
}

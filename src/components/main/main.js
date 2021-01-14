import React from "react"
import SectionImage from "../sectionImage/sectionImage"
import SectionText from "../sectionText/sectionText"

export default function Main({ datas, handleDisplayPage, page, setarticle }) {
  return (
    <div>
      <SectionImage />
      <SectionText
        datas={datas}
        handleDisplayPage={handleDisplayPage}
        page={page}
        setarticle={setarticle}
      />
    </div>
  )
}

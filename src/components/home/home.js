import React from "react"
import { HeroText } from "../hero/hero"
import { Articles } from "../article/article"

export default function Home({ datas, handleDisplayPage, setarticle }) {
  return (
    <div>
      <HeroText />
      <Articles
        datas={datas}
        handleDisplayPage={handleDisplayPage}
        setarticle={setarticle}
      />
    </div>
  )
}

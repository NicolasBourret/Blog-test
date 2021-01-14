import React from "react"
import Home from "../home/home"
import Footer from "../footer/footer"
import Article from "../article/article"

export default function SectionText({
  datas,
  handleDisplayPage,
  page,
  setarticle,
}) {
  let pageDisplayed
  if (page === "home") {
    pageDisplayed = (
      <Home
        datas={datas}
        handleDisplayPage={handleDisplayPage}
        setarticle={setarticle}
      />
    )
  } else {
    pageDisplayed = <Article />
  }

  return (
    <div>
      {pageDisplayed}
      <Footer />
    </div>
  )
}

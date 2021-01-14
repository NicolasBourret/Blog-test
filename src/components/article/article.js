import React, { useRef, useEffect, useState } from "react"
import ArticleStyles from "./article.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons"
import { ButtonArticle } from "../button/button"
import { ContainerRound } from "../container/container"

export default function Article() {
  return <div>Article</div>
}

export function Articles({ datas, handleDisplayPage, setarticle }) {
  return (
    <div className={ArticleStyles.article__cards}>
      {datas.map((data, index) => {
        return (
          <ArticleCard
            data={data}
            key={data.node.id}
            index={index}
            handleDisplayPage={handleDisplayPage}
            setarticle={setarticle}
          />
        )
      })}
    </div>
  )
}

function ArticleCard({ data, index, handleDisplayPage, setarticle }) {
  const ref = useRef(null)

  const [animation, setanimation] = useState(false)

  useEffect(() => {
    const parent = ref.current.parentNode.parentNode.getBoundingClientRect()

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY

      if (index === 0) {
        if (scroll >= parent.top - 200) {
          setanimation(true)
        }
      } else {
        if (scroll > parent.height * index - 200) {
          setanimation(true)
        }
      }
    })
  })

  return (
    <ContainerRound
      className={animation ? ArticleStyles.card__animation : ArticleStyles.card}
    >
      <div className={ArticleStyles.image__container} ref={ref}>
        <ArticleImage data={data} animation={animation} />
      </div>
      <div>
        <ArticlesInfos
          data={data}
          handleDisplayPage={handleDisplayPage}
          setarticle={setarticle}
        />
      </div>
    </ContainerRound>
  )
}

function ArticleImage({ data, animation }) {
  return (
    <div
      className={`${ArticleStyles.article__image} ${
        animation ? ArticleStyles.image__animation : ""
      }`}
      style={{ backgroundImage: `url(${data.node.frontmatter.image})` }}
    ></div>
  )
}

function ArticlesInfos({ data, handleDisplayPage, setarticle }) {
  const handleClick = () => {
    handleDisplayPage("article")
    setarticle(data.node.id)
  }

  return (
    <div className={ArticleStyles.article__infos}>
      <h2>{data.node.frontmatter.title}</h2>
      <p>{data.node.frontmatter.extract}</p>
      <ArticleAuthor data={data} />
      <div className={ArticleStyles.button}>
        <ButtonArticle onClick={handleClick}>Lire l'article</ButtonArticle>
      </div>
    </div>
  )
}

function ArticleAuthor({ data }) {
  return (
    <div className={ArticleStyles.author}>
      <div
        className={ArticleStyles.auhtor__image}
        style={{ backgroundImage: `url(${data.node.frontmatter.authorImage})` }}
      ></div>
      <p className={ArticleStyles.author__name}>
        {data.node.frontmatter.author}
      </p>
      <FontAwesomeIcon icon={faCalendarMinus} className={ArticleStyles.icon} />
      <p className={ArticleStyles.date}>{data.node.frontmatter.date}</p>
    </div>
  )
}

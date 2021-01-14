import React, { useState } from "react"
import { graphql } from "gatsby"
import Header from "../components/header/header"
import Main from "../components/main/main"

export default function Index({ data }) {
  const [page, setpage] = useState("home")
  const [article, setarticle] = useState(null)

  const datas = data.allMarkdownRemark.edges

  const handleDisplayArticle = id => {
    const article = datas.find(article => {
      return article.node.id === id
    })
    setarticle(article)
  }

  return (
    <div>
      <Header handleDisplayPage={setpage} page={page} article={article} />
      <Main
        datas={datas}
        handleDisplayPage={setpage}
        page={page}
        setarticle={handleDisplayArticle}
      />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
            extract
            author
            authorImage
          }
          headings {
            value
          }
          html
        }
      }
    }
  }
`

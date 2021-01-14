import React, { useState } from "react"
import HeaderSyles from "./header.module.css"
import Container from "../container/container"
import Logo from "../logo/logo"
import logo from "../../images/logo.png"
import Button, { ButtonNavigation } from "../button/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header({ handleDisplayPage, page, article }) {
  const [navigation, setnavigation] = useState(false)

  const handleClick = () => {
    setnavigation(false)
    handleDisplayPage("home")
  }

  let articleNavigation
  if (page === "article") {
    articleNavigation = (
      <ArticleNavigation
        setnavigation={setnavigation}
        navigation={navigation}
        article={article}
      />
    )
  }

  return (
    <header id={"header"} className={HeaderSyles.container}>
      <Container className={HeaderSyles.header}>
        <Logo>
          <Button onClick={handleClick}>
            <img src={logo} />
          </Button>
        </Logo>
      </Container>
      {articleNavigation}
    </header>
  )
}

function ArticleNavigation({ setnavigation, navigation, article }) {
  const handleDisplayNavigation = () => {
    setnavigation(!navigation)
  }

  return (
    <nav
      className={`${HeaderSyles.navigation} ${
        navigation ? HeaderSyles.nav__animate : HeaderSyles.nav__no_animate
      }`}
    >
      <ul className={HeaderSyles.nav__list}>
        {article.node.headings.map((heading, index) => {
          return (
            <ArticleNavigationItem
              heading={heading}
              index={index}
              navigation={navigation}
              key={index}
            />
          )
        })}
      </ul>
      <div className={`${HeaderSyles.button__container}`}>
        <ButtonNavigation
          className={HeaderSyles.button}
          onClick={handleDisplayNavigation}
        >
          <FontAwesomeIcon icon={faBars} className={HeaderSyles.icon} />
        </ButtonNavigation>
      </div>
    </nav>
  )
}

function ArticleNavigationItem({ index, heading, navigation }) {
  return (
    <li
      className={`${HeaderSyles.nav__item} ${
        navigation
          ? HeaderSyles.nav__link_animate
          : HeaderSyles.nav__link_no_animate
      }`}
    >
      <a href={`#${index}`} className={HeaderSyles.nav__link}>
        {heading.value}
      </a>
    </li>
  )
}

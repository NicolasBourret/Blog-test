import React, { useEffect, useRef, useState } from "react"
import FooterStyles from "./footer.module.css"
import Container from "../container/container"
import Logo from "../logo/logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faCodepen,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  const ref = useRef(null)

  const [animation, setanimation] = useState(false)

  useEffect(() => {
    const position = ref.current.getBoundingClientRect()

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY

      if (scroll + window.innerHeight - position.height > position.top) {
        setanimation(true)
      }
    })
  })

  return (
    <footer ref={ref} className={FooterStyles.container}>
      <Container
        className={`${FooterStyles.footer} ${
          animation ? FooterStyles.container__animation : ""
        }`}
      >
        <Logo
          className={`${FooterStyles.logo} ${
            animation ? FooterStyles.logo__animate_1 : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={`${FooterStyles.icon} `}
          />
        </Logo>
        <Logo
          className={`${FooterStyles.logo} ${
            animation ? FooterStyles.logo__animate_2 : ""
          }`}
        >
          <FontAwesomeIcon icon={faGithub} className={FooterStyles.icon} />
        </Logo>
        <Logo
          className={`${FooterStyles.logo} ${
            animation ? FooterStyles.logo__animate_3 : ""
          }`}
        >
          <FontAwesomeIcon icon={faCodepen} className={FooterStyles.icon} />
        </Logo>
        <Logo
          className={`${FooterStyles.logo} ${
            animation ? FooterStyles.logo__animate_4 : ""
          }`}
        >
          <FontAwesomeIcon icon={faPinterest} className={FooterStyles.icon} />
        </Logo>
      </Container>
    </footer>
  )
}

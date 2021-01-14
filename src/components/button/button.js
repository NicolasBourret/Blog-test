import React from "react"
import ButtonStyles from "./button.module.css"

export default function Button({ children, className, onClick }) {
  const HandleClick = () => {
    onClick()
  }
  return (
    <button
      className={`${ButtonStyles.button} ${className}`}
      onClick={HandleClick}
    >
      {children}
    </button>
  )
}

export function ButtonArticle({ onClick, children }) {
  return (
    <Button className={ButtonStyles.button__article} onClick={onClick}>
      {children}
    </Button>
  )
}

export function ButtonNavigation({ onClick, children, className }) {
  return (
    <Button
      className={`${ButtonStyles.button__navigation} ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

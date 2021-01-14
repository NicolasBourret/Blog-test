import React from "react"
import ContainerStyles from "./container.module.css"

export default function Container({ children, className }) {
  return (
    <div className={`${ContainerStyles.container} ${className}`}>
      {children}
    </div>
  )
}

export function ContainerCircle({ children, className }) {
  return (
    <Container className={`${ContainerStyles.circle} ${className}`}>
      {children}
    </Container>
  )
}

export function ContainerRound({ children, className }) {
  return (
    <Container className={`${ContainerStyles.round} ${className}`}>
      {children}
    </Container>
  )
}

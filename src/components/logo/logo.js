import React from "react"
import LogoStyles from "./logo.module.css"

export default function Logo({ children, className }) {
  return (
    <div className={`${LogoStyles.container} ${className}`}>{children}</div>
  )
}

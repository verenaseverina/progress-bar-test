import React from "react";

import './Card.scss'

export default function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{ title }</h2>
      { children }
    </div>
  )
}

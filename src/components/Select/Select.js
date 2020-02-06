import React from "react";

import './Select.scss'

export default function Select({ items, onChange, value }) {
  return (
    <div className="select-wrapper">
      <select
        className="select"
        onChange={onChange}
        value={value}
      >
        {
          items.map((_, idx) => (
            <option
              key={`option-${idx}`}
              value={idx}
            >
              #Progress Number {idx + 1}
            </option>
          ))
        }
      </select>
    </div>
  )
}

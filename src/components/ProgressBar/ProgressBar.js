import React, { useState, useEffect } from "react";

import './ProgressBar.scss'

export default function ProgressBar({
  value,
  limit
}) {
  const [width, setWidth] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (value > 0 && value <= limit) {
      setWidth((parseFloat(value) / limit) * 100)
      setPercentage((parseFloat(value) / limit) * 100)
    } else if (value <= 0) {
      setWidth(0)
      setPercentage(0)
    } else {
      setWidth(100)
      setPercentage((parseFloat(value) / limit) * 100)
    }
  }, [value, limit]);

  return (
    <div className="progress-bar" >
      <span className="filler-text">{percentage.toFixed(2)} %</span>
      <div className={`filler ${percentage >= 100 ? 'red' : ''}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

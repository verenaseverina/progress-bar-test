import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';

import ProgressBar from '../components/ProgressBar'

const endpoint = 'http://pb-api.herokuapp.com/bars';

function Home() {
  const [bars, setBars] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [limit, setLimit] = useState([]);
  const [selectedBar, setSelectedBar] = useState(0);

  const load = async () => {
    const { data: { buttons, bars, limit } } = await axios.get(endpoint);
    setBars(bars)
    setButtons(buttons)
    setLimit(limit)
  }

  const addProgress = (val) => {
    setBars(bars.map((item, idx) => idx === selectedBar ? item + val : item))
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div>
      {
        bars.map((barValue, idx) => (
          <ProgressBar
            key={idx}
            value={barValue}
            limit={limit}
          />
        ))
      }
      <select
        onChange={(event) => setSelectedBar(parseInt(event.target.value))}
      >
        {
          bars.map((_, idx) => (
            <option
              key={`option-${idx}`}
              value={idx}
            >
              #Progress Number {idx + 1}
            </option>
          ))
        }
      </select>
      {
        buttons.map((value, idx) => (
          <button key={`button-${idx}`} onClick={() => addProgress(value)}>{value}</button>
        ))
      }
    </div>
  );
}

export default withRouter(Home);

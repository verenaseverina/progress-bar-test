import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './Home.scss'

import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Card from '../../components/Card/Card';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';

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
    setBars(bars.map((item, idx) => {
      let newValue = item + val
      newValue = newValue < 0 ? 0 : newValue
      return idx === selectedBar ? newValue : item
    }))
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="container">
      <Card
        title="Progress Bar Demo"
      >
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
        </div>
      </Card>

      <Select
        onChange={(event) => setSelectedBar(parseInt(event.target.value))}
        value={selectedBar}
        items={bars}
      />
        <div>
          {
            buttons.map((value, idx) => (
              <Button
                key={`button-${idx}`}
                onClick={() => addProgress(value)}
                value={value}
              />
            ))
          }
        </div>
    </div>
  );
}

export default withRouter(Home);

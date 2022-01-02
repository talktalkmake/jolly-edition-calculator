import { calculateDueDates } from "./functions/calculateDueDates"
import React, { useState } from "react";
import './App.css';
import getId from './functions/getId'
import moment from 'moment'
import PrintPricing from './components/PrintPricing'

function App() {
  const [weddingDate, setWeddingDate] = useState(false)
  const dateObj = calculateDueDates(weddingDate)
  
  return (
    <>
    <img src={process.env.PUBLIC_URL + '/je-logo.svg'} alt="Jolly Edition logo" className="je-logo mt-2" />
    <h1 className="text-center text-6xl">Calcudate</h1>
    <section className="row">
      <label htmlFor="wedding-date" className="block">When is the wedding day?</label>
      <input
        type="date"
        min={moment().add(3, 'months').format('YYYY-MM-DD')}
        max={moment().add(2, 'years').format('YYYY-MM-DD')}
        id="wedding-date"
        onChange={e => setWeddingDate(e.target.value)} />
    </section>
    {weddingDate && (
    <section className="row events">
    {dateObj.map(event => 
      <dl className={event.impossible ? 'strike ghost' : null} key={getId()}>
          <dt className="event-label"><span className="block h3">{event.label}</span> due date</dt>
          <dd className="event-date">{event.date ? event.date : 'not possible (date in the past)'}</dd>
      </dl>
    )}
    </section>
    )}
    <PrintPricing />
    </>
  );
}

export default App;

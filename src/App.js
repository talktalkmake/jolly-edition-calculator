import { calculateDueDates } from "./functions/calculateDueDates"
import { useState } from "react";
import './App.css';

function App() {
  const [weddingDate, setWeddingDate] = useState(false)
  const dateObj = () => calculateDueDates(weddingDate)
  return (
    <div className="App">
      <section className="row">
        <label htmlFor="wedding-date">When is the wedding day?</label>
        <input type="date" id="wedding-date" onChange={e => setWeddingDate(e.target.value)} />
      </section>
      {weddingDate && (
      <section className="row">
        <dl>
          {
          dateObj().map(event => 
            <>
            <dt>{event.label} due date</dt>
            <dd>{event.date ? event.date : 'not possible (date in the past)'}</dd>
            </>
          )
          }
        </dl>
      </section>
      )}
    </div>
  );
}

export default App;

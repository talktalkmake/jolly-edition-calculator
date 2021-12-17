import calculateDueDates from "./functions/calculateDueDates"
import { useState } from "react";
import './App.css';

function App() {
  const {weddingDate, setWeddingDate} = useState('')
  return (
    <div className="App">
      <section className="row">
        <label htmlFor="wedding-date">When is the wedding day?</label>
        <input type="date" id="wedding-date" onChange={e => calculateDueDates(e.target.value)} />
      </section>
      <section className="row">
        <dl>
          <dt>Save-the-date due date</dt>
          <dd id="save-the-date-due"></dd>
          <dt>Invite due date</dt>
          <dd id="invite-due"></dd>
          <dt>Day-of deadline</dt>
          <dd id="day-of-due"></dd>
        </dl>
      </section>
    </div>
  );
}

export default App;

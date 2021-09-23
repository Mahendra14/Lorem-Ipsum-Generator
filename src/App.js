import React, { useState } from 'react';
import data from './data';
function App() {
  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello there from console!");
  }
  
  return (
    <section className="section-center">
      <h3>Tired of General Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, eligendi.
        </p>

      </article>
    </section>

  );
}

export default App;

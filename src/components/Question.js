import React, { useState } from 'react';

function Question({ id, prompt, answers, correctIndex, deleteItem, updateAnswer }) {
  const [ selectValue, setSelectValue ] = useState(answers[correctIndex]);

  function clickDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(deleteItem(id));
  }

  function handleChange(e) {
    setSelectValue(e.target.value);
  }

  function pickAnswer(e) {
    e.preventDefault();
    const newIndex = answers.indexOf(selectValue);
    
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({correctIndex: newIndex}),
    })
    .then(res => res.json())
    .then(obj => updateAnswer(obj));
  }

  return (
    <div>
      <li>
        <p>Prompt {prompt}</p>
        <p>Answer: 
          <form action="#" onSubmit={pickAnswer}>
            <select name='answers' value={selectValue} onChange={handleChange}>
              {answers.map(ans => <option key={ans} value={ans}>{ans}</option>)}
            </select>
            <input type='submit' value='submit' />
          </form>
          <button onClick={clickDelete}>Delete Question</button>
        </p>
      </li>
    </div>
        
    )
}

export default Question;
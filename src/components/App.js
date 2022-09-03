import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [ page, setPage ] = useState("List");
  const [ questions, setQuestions ] = useState([]);

  useEffect(() => { 
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data));
  }, []);

  function addQuestion(question) {
    setQuestions(questions => 
      [...questions, question]);
  }

  function deleteItem(id) {
    setQuestions(questions => questions.filter(question => question.id !== id));
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> 
        : <QuestionList questions={questions} deleteItem={deleteItem}/>}
    </main>
  );
}

export default App;

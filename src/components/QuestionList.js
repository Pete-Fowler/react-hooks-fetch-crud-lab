import React from "react";

function QuestionList({ questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map(question => 
        <ul>
          <li>
            <p>Prompt {question.prompt}</p>
            <p>Answers: {question.answers.map(ans => `${ans}  `)}</p>
            <p>Correct: {question.answers[question.correctIndex]}</p>
          </li>
        </ul>
      )}
    </section>
  );
}

export default QuestionList;

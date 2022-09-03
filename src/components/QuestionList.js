import React from "react";
import Question from './Question';

function QuestionList({ questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map(question => 
        <Question 
          key={question.id} 
          prompt={question.prompt} 
          answers={question.answers} 
          correctIndex={question.correctIndex}
        />)}
      </ul>
    </section>
  );
}

export default QuestionList;

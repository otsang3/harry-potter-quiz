import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';

function App() {

  useEffect(() => {

    setState({
      ...state,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    })
  },[])

  const initialState = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  }

  const [state, setState] = useState(initialState)
  return (
    <div>
      <Quiz
        answer={state.answer}
        answerOptions={state.answerOptions}
        questionId={state.questionId}
        question={state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected="1"
      />
    </div>
  );
}

export default App;

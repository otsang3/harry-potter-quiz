import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';

function App() {

  useEffect(() => {

    setState({
      ...state,
      questsion: quizQuestions[0].question,
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

    </div>
  );
}

export default App;

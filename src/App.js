import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';

function App() {

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
      <Question content="What is your favourite food?"/>
    </div>
  );
}

export default App;

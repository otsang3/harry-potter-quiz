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
  },[]);

  const initialState = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  }

  const setUserAnswer = (answer) => {
    setState({
      ...state,
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    })
  }

  const setNextQuestion = () => {
    const counter = state.counter + 1;
    const questionId = state.questionId + 1;
    setState({
      ...state,
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    })
  }

  const handleAnswerSelected = (event) => {
    setUserAnswer(event.currentTarget.value);

    if (state.questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  }

  const getResults = () => {
    const answersCount = state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
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
        onAnswerSelected={handleAnswerSelected}
      />
    </div>
  );
}

export default App;

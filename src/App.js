import React, { useState, useEffect } from 'react';
import './App.css';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Header from './components/Header';

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

  useEffect(() => {

    setState({
      ...state,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    })
  },[]);

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
    setState(prevState => { return {
      ...prevState,
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    }})
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

  const setResults = (result) => {

    setState({ result: result[0]})

  }

  const renderQuiz = () => {
    return(
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
    )
  }

  const renderResult = () => {
    return(
      <Result quizResult={state.result} />
    )
  }

  return (
    <div className="app">
      <Header/>
      {state.result ? renderResult() : renderQuiz()}
    </div>
    
  );
}

export default App;

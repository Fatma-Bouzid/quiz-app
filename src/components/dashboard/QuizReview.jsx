import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Timer from '../components/Timer'; // Assuming you have a Timer component
import Question from './Question'; // Assuming you have a Question component

const QuizReviewPage = ({ quizData }) => {
  return (
    <div className="quiz-review">
      <Sidebar />
      <Header />
      <Timer time={quizData.time} /> {/* Pass the timer value from quizData */}
      {quizData.questions.map((question, index) => (
        <div key={question.id} className="question-review">
          <Question question={question} /> {/* Assuming Question component handles rendering */}
          <div className="answer-review">
            <p>Your Answer: {question.userAnswer}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
            {question.userAnswer === question.correctAnswer ? (
              <p>Your answer is correct!</p>
            ) : (
              <p>Your answer is incorrect.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizReviewPage;

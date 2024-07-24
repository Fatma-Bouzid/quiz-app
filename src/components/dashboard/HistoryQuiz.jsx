// src/components/dashboard/HistoryQuiz.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HistoryImage from '../../assets/history.jpg';
import './historyQuiz.css';

const HistoryQuiz = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/categories/history/questions');
  };

  return (
    <div className="history-quiz">
      <h1 className="titre-history">History Quiz Page</h1>
      <p className="soustitre-history">Read the following instructions</p>
      <div className="history-content">
        <img src={HistoryImage} alt="History" className="image-history" />
        <div className="history-details">
          <div className="detail-item">
            <h4>Date:</h4> <span>28/07/2021</span>
          </div>
          <div className="detail-item">
            <h4>Time Limit:</h4> <span>30 Mins</span>
          </div>
          <div className="detail-item">
            <h4>Attempts:</h4> <span>Once</span>
          </div>
          <div className="detail-item">
            <h4>Points:</h4> <span>200 Points</span>
          </div>
        </div>
      </div>
      <h4>Instructions</h4>
      <p>This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to be familiar with the topics. Keep the following in mind:

        Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.
        Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.

        To start, click the "Start" button. When finished, click the "Submit" button.
      </p>
      <div>
        <button className='button-start' onClick={handleStartClick}>Start</button>
      </div>
    </div>
  );
};

export default HistoryQuiz;

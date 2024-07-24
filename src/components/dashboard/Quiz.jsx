import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import HistoryImage from '../../assets/imagequiz.png';
import './quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: "Guy Bailey, Roy Hackett and Paul Stephenson made history in 1963, as part of a protest against a bus company that refused to employ black and Asian drivers in which UK city?",
      options: ["London", "Edinburgh", "Liverpool", "Canary Wharf"],
      correctAnswer: "Liverpool",
    },
    {
      question: "Mary Seacole, a Jamaican-born nurse, gained recognition for her efforts during which conflict?",
      options: ["Crimean War", "World War I", "Napoleonic Wars", "Korean War"],
      correctAnswer: "Crimean War",
    },
    {
      question: "In 1955, Rosa Parks was arrested for refusing to give up her seat on a bus to a white person. This incident took place in which US city?",
      options: ["Montgomery", "Atlanta", "Birmingham", "New Orleans"],
      correctAnswer: "Montgomery",
    },
    {
      question: "Who was the first woman of Indian origin to go to space?",
      options: ["Sunita Williams", "Kalpana Chawla", "Anousheh Ansari", "Rhea Seddon"],
      correctAnswer: "Kalpana Chawla",
    },
    {
      question: "Which South African leader is known for his role in ending apartheid and becoming the country's first black president?",
      options: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Jacob Zuma"],
      correctAnswer: "Nelson Mandela",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes in seconds
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        alert("Time's up!");
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleNextQuestion = () => {
    if (selectedOption) {
      const answer = {
        question: questions[currentQuestion].question,
        userAnswer: selectedOption,
        correctAnswer: questions[currentQuestion].correctAnswer
      };
      setAnswers([...answers, answer]);
      
      setSelectedOption("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowConfirmation(true);
      }
    } else {
      alert("Please select an option!");
    }
  };

  const handleSubmitQuiz = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit the quiz?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'swal-confirm-class',
        cancelButton: 'swal-cancel-class',
        actions: 'swal-actions',
        icon: 'swal-icon-class',
        popup: 'swal-popup-class'
      },
      backdrop: 'rgba(0, 0, 0, 0.52)',
      padding: '3rem'
    }).then((result) => {
      if (result.isConfirmed) {
        setShowConfirmation(false);

        const correctAnswersCount = answers.filter(answer => answer.userAnswer === answer.correctAnswer).length;
        const totalQuestions = questions.length;
        const percentageScore = (correctAnswersCount / totalQuestions) * 100;

        if (percentageScore >= 60) {
          Swal.fire({
            title: 'Congratulations!',
            text: `Congratulations you have passed, You score ${percentageScore.toFixed(2)}% `,
            icon: 'success',
            confirmButtonText: 'Review Answers',
            customClass: {
              confirmButton: 'swal-confirm-class',
              actions: 'swal-actions',
              icon: 'swal-icon-class',
              popup: 'swal-popup-class'
            },
            backdrop: 'rgba(0, 0, 0, 0.52)',
            padding: '3rem'
          }).then((reviewResult) => {
            if (reviewResult.isConfirmed) {
              navigate('/categories/history/questions');
            }
          });
        } else {
          Swal.fire({
            title: 'Sorry!',
            text: `You did not pass. You scored ${percentageScore.toFixed(2)}%.`,
            icon: 'error',
            confirmButtonText: 'Review Answers',
            customClass: {
              confirmButton: 'swal-confirm-class',
              actions: 'swal-actions',
              icon: 'swal-icon-class',
              popup: 'swal-popup-class'
            },
            backdrop: 'rgba(0, 0, 0, 0.52)',
            padding: '3rem'
          }).then((reviewResult) => {
            if (reviewResult.isConfirmed) {
              navigate('/categories/history/questions');
            }
          });
        }

        setCurrentQuestion(0);
        setAnswers([]);
      }
    });
  };

  const handleCancelSubmission = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="quiz-container">
      <div className="flex-container">
        <div className="title-subtitle-container">
          <h1 className="titre-history">History Quiz Page</h1>
          <p className="soustitre-history">Answer the question below</p>
        </div>
        <div className="timer-container">
          <p>Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}Mins</p>
        </div>
      </div>
      <div className='header'>
        <img src={HistoryImage} alt="History" className="image-history" />
        <div>
          <h2>Question {currentQuestion + 1}/5</h2>
          <h3>{questions[currentQuestion].question}</h3>
        </div>
      </div>
      <h4>Choose answer</h4>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="option-container">
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
            {selectedOption && option === selectedOption && (
              <div className="answer-feedback">
                <p className="your-answer">Your answer</p>
                
              </div>
            )}
            {option === questions[currentQuestion].correctAnswer && (
              <div className="answer-feedback">
                <p className="correct-answer">Correct answer</p>
                
              </div>
            )}
            
          </div>
          
        ))}
      </div>
      {currentQuestion === questions.length - 1 ? (
        <button onClick={handleSubmitQuiz}>Submit</button>
      ) : (
        <button onClick={handleNextQuestion}>Next</button>
      )}

      {showConfirmation && (
        <div className="confirmation-box">
          <p>Are you sure you want to submit?</p>
          <button onClick={handleSubmitQuiz}>Yes</button>
          <button onClick={handleCancelSubmission}>No</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;

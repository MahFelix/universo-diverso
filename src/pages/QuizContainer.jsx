/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QuizIntro from '../components/QuizIntro';
import QuizQuestion from '../components/QuizQuestion';
import QuizResult from '../components/QuizResult';



const quizData = {
  title: "Questão de Acessibilidade",
  description: "Entenda os conceitos e desafios da acessibilidade digital para usuários com deficiência",
  questions: [
    {
      id: 1,
      text: "Por que garantir um campo de acesso?",
      options: [
        { id: 'a', text: "Os leitores de tela precisam saber" },
        { id: 'b', text: "Para atender a legislação" },
        { id: 'c', text: "Para não ser processado" },
        { id: 'd', text: "Todos precisam ter acesso" }
      ],
      correctAnswer: 'd',
      feedback: "As pessoas também precisam acessar o conteúdo independente de sua condição. Garantir o acesso é essencial para todos."
    },
    {
      id: 2,
      text: "O que é um intérprete de Libras?",
      options: [
        { id: 'a', text: "Uma pessoa que cria traduções" },
        { id: 'b', text: "Um profissional que interpreta a língua" },
        { id: 'c', text: "Um software para tradução" },
        { id: 'd', text: "Um dispositivo de acessibilidade" }
      ],
      correctAnswer: 'b',
      feedback: "As pessoas também precisam acessar o conteúdo independente de sua condição. Garantir o acesso é essencial para todos."
    }
  ]
};

const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #e0e0e0;
    z-index: -1;
  }
`;

const ProgressStep = styled.div`
  background-color: ${props => props.active ? '#03a9f4' : '#e0e0e0'};
  color: white;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 500;
  z-index: 1;
`;

function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset quiz state when component mounts
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
  }, []);

  const handleStartQuiz = () => {
    navigate('/question/1');
    setCurrentQuestion(1);
  };

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswer(answerId);
    
    const question = quizData.questions.find(q => q.id === questionId);
    const correct = question.correctAnswer === answerId;
    
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setShowFeedback(true);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < quizData.questions.length) {
      navigate(`/question/${currentQuestion + 1}`);
      setCurrentQuestion(prev => prev + 1);
    } else {
      navigate('/result');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    navigate('/');
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={
          <QuizIntro 
            title={quizData.title}
            description={quizData.description}
            onStart={handleStartQuiz}
          />
        } />
        
        {quizData.questions.map((question, index) => (
          <Route 
            key={question.id}
            path={`/question/${question.id}`} 
            element={
              <>
                <ProgressBar>
                  <ProgressStep active>Novo Jogo</ProgressStep>
                  <ProgressStep active={currentQuestion >= 1}>Q1</ProgressStep>
                  <ProgressStep active={currentQuestion >= 2}>Q2</ProgressStep>
                  <ProgressStep active={currentQuestion > quizData.questions.length}>Fim</ProgressStep>
                </ProgressBar>
                
                <QuizQuestion
                  question={question}
                  selectedAnswer={selectedAnswer}
                  showFeedback={showFeedback}
                  isCorrect={isCorrect}
                  feedback={question.feedback}
                  onAnswerSelect={(answerId) => handleAnswerSelect(question.id, answerId)}
                  onContinue={handleContinue}
                />
              </>
            }
          />
        ))}
        
        <Route path="/result" element={
          <>
            <ProgressBar>
              <ProgressStep active>Novo Jogo</ProgressStep>
              <ProgressStep active>Q1</ProgressStep>
              <ProgressStep active>Q2</ProgressStep>
              <ProgressStep active>Fim</ProgressStep>
            </ProgressBar>
            
            <QuizResult 
              score={score}
              total={quizData.questions.length}
              onRestart={handleRestart}
            />
          </>
        } />
      </Routes>
    </Container>
  );
}

export default QuizContainer;
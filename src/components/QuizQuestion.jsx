import React from 'react';
import styled from 'styled-components';
import QuizFeedback from './QuizFeedbak';


const QuestionContainer = styled.div`
  background-color: #03a9f4;
  padding: 30px;
  border-radius: 8px;
  color: white;
  position: relative;
`;

const QuestionNumber = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
`;

const QuestionText = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

const OptionButton = styled.button`
  background-color: white;
  color: #03a9f4;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e3f2fd;
  }
  
  ${props => props.selected && `
    background-color: #0288d1;
    color: white;
  `}
`;

function QuizQuestion({ 
  question, 
  selectedAnswer, 
  showFeedback, 
  isCorrect, 
  feedback, 
  onAnswerSelect, 
  onContinue 
}) {
  return (
    <QuestionContainer role="region" aria-labelledby={`question-${question.id}`}>
      <QuestionNumber>{question.id}.</QuestionNumber>
      <QuestionText id={`question-${question.id}`}>{question.text}</QuestionText>
      
      <OptionsGrid>
        {question.options.map(option => (
          <OptionButton
            key={option.id}
            selected={selectedAnswer === option.id}
            onClick={() => onAnswerSelect(option.id)}
            disabled={showFeedback}
            aria-checked={selectedAnswer === option.id}
            role="radio"
          >
            {option.text}
          </OptionButton>
        ))}
      </OptionsGrid>
      
      {showFeedback && (
        <QuizFeedback
          isCorrect={isCorrect}
          feedback={feedback}
          onContinue={onContinue}
        />
      )}
    </QuestionContainer>
  );
}

export default QuizQuestion;
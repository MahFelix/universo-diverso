import React from 'react';
import styled from 'styled-components';

const FeedbackOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const FeedbackContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  max-width: 350px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #757575;
  
  &:hover {
    color: #000;
  }
`;

const HeaderText = styled.h3`
  text-align: center;
  font-size: 18px;
  margin-top: 5px;
  color: #4caf50;
`;

const FeedbackText = styled.p`
  margin: 15px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;

const ContinueButton = styled.button`
  background-color: #03a9f4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: #0288d1;
  }
`;

function QuizFeedback({ isCorrect, feedback, onContinue }) {
  return (
    <FeedbackOverlay role="dialog" aria-modal="true" aria-label="Feedback da resposta">
      <FeedbackContainer>
        <CloseButton onClick={onContinue} aria-label="Fechar feedback e continuar">×</CloseButton>
        <HeaderText>{isCorrect ? "CORRETO!" : "INCORRETO!"}</HeaderText>
        <FeedbackText>{feedback}</FeedbackText>
        <ContinueButton onClick={onContinue}>Avançar</ContinueButton>
      </FeedbackContainer>
    </FeedbackOverlay>
  );
}

export default QuizFeedback;
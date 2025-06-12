import React from 'react';
import styled from 'styled-components';
import {FeedbackOverlay, FeedbackContainer, CloseButton, HeaderText, FeedbackText, ContinueButton} from '../styles/Quiz';

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
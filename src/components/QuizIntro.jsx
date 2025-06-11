import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  background-color: #03a9f4;
  padding: 40px 30px;
  border-radius: 8px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 380px;
`;

const StartButton = styled.button`
  background-color: white;
  color: #03a9f4;
  border: none;
  padding: 10px 40px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

function QuizIntro({ title, description, onStart }) {
  return (
    <IntroContainer role="region" aria-label="Introdução do quiz sobre acessibilidade">
      <Title>{title}</Title>
      <Description>{description}</Description>
      <StartButton onClick={onStart}>Jogar</StartButton>
    </IntroContainer>
  );
}

export default QuizIntro;
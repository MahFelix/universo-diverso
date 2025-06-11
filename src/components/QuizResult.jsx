import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #03a9f4;
  padding: 40px 30px;
  border-radius: 8px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ScoreText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ScoreValue = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CongratsText = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 380px;
`;

const RestartButton = styled.button`
  background-color: white;
  color: #03a9f4;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

function QuizResult({ score, total, onRestart }) {
  return (
    <ResultContainer role="region" aria-label="Resultado do quiz">
      <Title>Fim do Jogo</Title>
      <ScoreText>Acertou {score} de {total} questões</ScoreText>
      <ScoreValue>Ganhou {score * 100} pontos!</ScoreValue>
      <CongratsText>
        Parabéns por completar o quiz de acessibilidade!
      </CongratsText>
      <RestartButton onClick={onRestart}>Voltar para o Início</RestartButton>
    </ResultContainer>
  );
}

export default QuizResult;
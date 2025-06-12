import {ResultContainer, Title, ScoreText, ScoreValue, CongratsText, RestartButton} from '../styles/Quiz'

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
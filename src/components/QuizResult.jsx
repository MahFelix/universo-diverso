import {
  ResultContainer,
  Title,
  ScoreText,
  ScoreValue,
  CongratsText,
  RestartButton,
} from "../styles/Quiz";

function QuizResult({ score, total, onRestart }) {
  return (
    <ResultContainer role="region" aria-label="Resultado do quiz">
      <Title tabIndex="0" aria-label="Fim">Fim do Jogo</Title>
      <ScoreText tabIndex="0" aria-label="Quantidade de acertos">
        Acertou {score} de {total} questões
      </ScoreText>
      <ScoreValue tabIndex="0" aria-label="Pontuação">Ganhou {score * 100} pontos!</ScoreValue>
      <CongratsText tabIndex="0" aria-label="Parabéns">
        Parabéns por completar o quiz de acessibilidade!
      </CongratsText>
      <RestartButton role="button" aria-label="Botão voltar para o menu" onClick={onRestart}>Voltar para o Menu Inicial</RestartButton>
    </ResultContainer>
  );
}

export default QuizResult;

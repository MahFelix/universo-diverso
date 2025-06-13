import {
  Title,
  IntroContainer,
  Description,
  StartButton,
} from "../styles/Quiz";

function QuizIntro({ title, description, onStart }) {
  return (
    <IntroContainer
      role="region"
      aria-label="Introdução do quiz sobre acessibilidade"
    >
      <Title tabIndex="0">{title}</Title>
      <Description tabIndex="0" aria-label="Descrição do jogo">{description}</Description>
      <StartButton aria-label="Botão Jogar" onClick={onStart}>Jogar</StartButton>
    </IntroContainer>
  );
}

export default QuizIntro;

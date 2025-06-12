
import {Title, IntroContainer, Description, StartButton} from '../styles/Quiz';

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
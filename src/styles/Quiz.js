import styled, { css } from "styled-components";

//
// LAYOUT
//
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: var(--blue-card);
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
`;

//
// BARRA DE PROGRESSO
//
export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 8px;
`;

export const ProgressStep = styled.div`
  flex: 1;
  text-align: center;
  align-content: center;
  padding: 10px;
  margin: 0 4px;
  border-radius: 8px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "var(--progress-violet)" : "var(--secondary-color)")};
  color: var(--primary-color);
`;

//
// TEXTOS
//
export const Title = styled.h1` 
  font-size: 24px;
  margin-bottom: 20px;
`;

export const QuestionText = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const ScoreText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ScoreValue = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CongratsText = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 380px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 380px;
`;

export const HeaderText = styled.h3`
  text-align: center;
  font-size: 18px;
  margin-top: 5px;
  color: var(--green-button-color);
`;

export const feedbackDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;      
  gap: 1rem;
  max-width: 500px;
`;

export const FeedbackText = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  padding: 40px;
`;

//
// BOTÕES REUTILIZÁVEIS
//
const BaseButton = styled.button`
  font-weight: bold;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: var(--blue-button-color);
  color: var(--blue-button-text);
  padding: 10px 20px;

  &:hover {
    color: var(--blue-button-text-hover);
    background-color: var(--blue-button-color-hover);
  }
`;

export const OutlineButton = styled(BaseButton)`
  background-color: var(--secondary-button-color);
  color: var(--secondary-button-text);
  padding: 10px 20px;

  &:hover {
    color: var(--blue-button-text-hover);
    background-color: var(--blue-button-color-hover);
  }
`;

export const StartButton = styled(OutlineButton)`
  padding: 10px 40px;
  text-transform: uppercase;
`;

export const RestartButton = styled(OutlineButton)``;

export const ContinueButton = styled.button`
  background-color: var(--secondary-button-color);
  color: var(--secondary-button-text);
  font-weight: bold;

  &:hover {
    color: var(--blue-button-text-hover);
    background-color: var(--blue-button-color-hover);
  }
`;

export const OptionButton = styled.button`
  background-color: var(--blue-button-color);
  color: var(--blue-button-text);
  height: 100%;
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  text-align: left;
  align-itens: center;
  justify-content: space-between;

  &:hover {
    color: var(--primary-color);
    background-color: var(--blue-button-color-hover);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* sombra suave */
  }

  ${({ selected }) =>
    selected &&
    css`
      color:var(--primary-color);
      background-color: var(--secondary-color);
    `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  font-size: 20px;
  color: var(--primary-color);

  &:hover {
    color: #000000;
  }
`;

//
// CONTAINERS ESPECÍFICOS
//
export const ResultContainer = styled.div`
  background-color: var(--blue-card);
  padding: 40px 30px;
  border-radius: 8px;
  color: var(--primary-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--blue-card);
  padding: 30px;
  color: var(--primary-color);
  position: relative;
`;

export const OptionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;      
  height: 100%;             
  gap: 1rem;
`;

export const IntroContainer = styled(ResultContainer)`
  justify-content: center;
`;

//
// FEEDBACK MODAL
//
export const FeedbackOverlay = styled.div`
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

export const FeedbackContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  max-width: 350px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
`;


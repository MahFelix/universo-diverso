import styled, { css } from "styled-components";

//
// LAYOUT
//
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #03a9f4;
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
  padding: 10px;
  margin: 0 4px;
  border-radius: 8px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "#9b5de5" : "#e0e0e0")};
  color: ${(props) => (props.active ? "#fff" : "#555")};
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
  color: #4caf50;
`;

export const FeedbackText = styled.p`
  margin: 15px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`;

//
// BOTÕES REUTILIZÁVEIS
//
const BaseButton = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #025379;
  color: #fff;
  padding: 10px 20px;

  &:hover {
    color: #025379;
    background-color: #fff;
  }
`;

export const OutlineButton = styled(BaseButton)`
  background-color: #fff;
  color: #025379;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;

  &:hover {
    color: #f0f0f0;
    background-color: #70cdf8;
  }
`;

export const StartButton = styled(OutlineButton)`
  padding: 10px 40px;
  text-transform: uppercase;
`;

export const RestartButton = styled(OutlineButton)``;

export const ContinueButton = styled.button`
  background-color: #4caf50;
  color: #242424;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    color: #45a049;
    background-color: #fff;
  }

`;

export const OptionButton = styled.button`
  background-color: white;
  color: #025379;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: white;
    background-color: #025379;
    transform: translateY(-4px); /* ef eito flutuante */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* sombra suave */
  }

  ${({ selected }) =>
    selected &&
    css`
      color: #091b24;;
      background-color: white;
    `}
`;


export const CloseButton = styled.button`
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

//
// CONTAINERS ESPECÍFICOS
//
export const ResultContainer = styled.div`
  background-color: #03a9f4;
  padding: 40px 30px;
  border-radius: 8px;
  color: #091b24;
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
  background-color: #03a9f4;
  padding: 30px;
  border-radius: 8px;
  color: #091b24;
  position: relative;
`;

export const OptionsGrid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 10px;
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


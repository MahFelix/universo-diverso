import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #e0e0e0;
    z-index: -1;
  }
`;

export const ProgressStep = styled.div`
  background-color: ${props => props.active ? '#03a9f4' : '#e0e0e0'};
  color: white;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 500;
  z-index: 1;
`;

export const ResultContainer = styled.div`
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

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ScoreText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ScoreValue = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const CongratsText = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 380px;
`;

export const RestartButton = styled.button`
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

export const QuestionContainer = styled.div`
  background-color: #03a9f4;
  padding: 30px;
  border-radius: 8px;
  color: white;
  position: relative;
`;

export const QuestionNumber = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const QuestionText = styled.h2`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const OptionButton = styled.button`
  background-color: white;
  color: #03a9f4;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e3f2fd;
  }
  
  ${props => props.selected && `
    background-color: #0288d1;
    color: white;
  `}
`;

export const IntroContainer = styled.div`
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

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 380px;
`;

export const StartButton = styled.button`
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

export const ContinueButton = styled.button`
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
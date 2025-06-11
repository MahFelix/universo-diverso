// ActivityCard.jsx

import styled from 'styled-components';
import { GameController, Book, FileText } from '@phosphor-icons/react';

// Estilos do Card
const CardContainer = styled.div`
  background-color: ${props => props.bgColor || '#ff9800'};
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  height: 160px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CardIcon = styled.div`
  color: ${props => props.iconColor || '#000'};
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const CardCategory = styled.span`
  font-size: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${props => props.color || '#000'};
`;

const CardDescription = styled.p`
  font-size: 11px;
  flex-grow: 1;
  color: ${props => props.color || '#000'};
`;

const CardButton = styled.button`
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  padding: 6px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => props.color || '#000'};
  font-weight: 600;
  align-self: flex-start;
  margin-top: 6px;
`;

// Mapeamento de tipo para ícone
const getIconForType = (type) => {
  switch (type.toLowerCase()) {
    case 'jogo':
      return <GameController weight="fill" />;
    case 'história':
      return <Book weight="fill" />;
    case 'tutorial':
      return <FileText weight="fill" />;
    default:
      return <Book weight="fill" />;
  }
};

// Componente de Card
const ActivityCard = ({
  bgColor,
  type,
  progress,
  title,
  description,
  buttonText,
  textColor,
  iconColor,
  onClick
}) => {
  const icon = getIconForType(type);
  const showProgress = progress !== undefined;
  const categoryText = showProgress ? `${type.toUpperCase()} (${progress}%)` : type.toUpperCase();

  

  return (
    <CardContainer bgColor={bgColor}>
      <CardHeader>
        <CardIcon iconColor={iconColor} aria-hidden="true">
          {icon}
        </CardIcon>
        <CardCategory>{categoryText}</CardCategory>
      </CardHeader>
      <CardTitle color={textColor}>{title}</CardTitle>
      <CardDescription color={textColor}>{description}</CardDescription>
      <CardButton 
        color={textColor} 
        onClick={onClick}
        aria-label={`${buttonText} para atividade: ${title}`}
      >
        {buttonText}
      </CardButton>
    </CardContainer>
  );
};

export default ActivityCard;
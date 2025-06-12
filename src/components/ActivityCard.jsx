import styled from 'styled-components';
import { GameController, Book, FileText } from '@phosphor-icons/react';
import {CardContainer, CardHeader, CardIcon, CardCategory, CardTitle, CardDescription, CardButton} from '../styles/ActivityCard';

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
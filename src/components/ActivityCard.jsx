import { useNavigate } from 'react-router-dom';
import {SportsEsportsOutlined,AutoStoriesOutlined, BookOutlined} from '@mui/icons-material';
import {CardContainer, CardHeader, CardIcon, CardCategory, CardTitle, CardDescription, CardButton} from '../styles/ActivityCard';

// Mapeamento de tipo para ícone
const getIconForType = (type) => {
  switch (type.toLowerCase()) {
    case 'jogo':
      return <SportsEsportsOutlined aria-label="Jogo"/>;
    case 'história':
      return <AutoStoriesOutlined aria-label="História"/>;
    default:
      return <BookOutlined aria-label="Outros"/>;
  }
};

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
  const categoryText = showProgress ? `${progress}% concluídos` : type.toUpperCase();
  const navigate = useNavigate();

  const handleClick = (event, path) => {
    console.log(path);
    navigate(path);
  };

  return (
    <CardContainer bgColor={bgColor}>
      <CardHeader>
        <CardIcon iconColor={iconColor} aria-hidden="true">
          {icon}
        </CardIcon>
        <CardCategory>{categoryText}</CardCategory>
      </CardHeader>

      <CardTitle color={textColor}><h3>{title}</h3></CardTitle>

      <CardDescription color={textColor}><p>{description}</p></CardDescription>

      <CardButton 
        color={textColor} 
        onClick={e=>{handleClick(e, {onClick})}}
        aria-label={`${buttonText} para atividade: ${title}`}
      >
        {buttonText}
      </CardButton>
      
    </CardContainer>
  );
};

export default ActivityCard;
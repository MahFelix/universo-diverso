import {SportsEsportsOutlined, AutoStoriesOutlined, BookOutlined} from '@mui/icons-material';
import {CardContainer, CardContent, CardHeader, CardIcon, CardCategory, CardTitle, CardDescription, CardButton} from '../styles/ActivityCard';


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

  return (
    <CardContainer tabIndex="0" aria-label='card de atividade' bgColor={bgColor}>
      <CardContent>
          <CardHeader>
            <CardIcon aria-label='ícone do card' iconColor={iconColor} aria-hidden="true">
              {icon}
            </CardIcon>
            <CardCategory tabIndex="0" aria-labelledby='categoria ou avanço da atividade'>{categoryText}</CardCategory>
          </CardHeader>

          <CardTitle  tabIndex="0" aria-labelledby='card title' color={textColor}>{title}</CardTitle>

          <CardDescription tabIndex="0" aria-labelledby='card description' color={textColor}>{description}</CardDescription>
      </CardContent>
      <CardButton 
        color={textColor} 
        onClick={() => {
          if (typeof onClick === 'function') {
            onClick(); 
          } else if (typeof onClick === 'string') {
            const event = { preventDefault: () => {} };
            onClick(event);
          }
        }}
        aria-label={`${buttonText} a atividade: ${title}`}
      >
        {buttonText}
      </CardButton>
    </CardContainer>
  );
};

export default ActivityCard;
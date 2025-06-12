
import QuizFeedback from './QuizFeedbak';
import {QuestionContainer, QuestionNumber, QuestionText, OptionsGrid, OptionButton} from '../styles/Quiz';

function QuizQuestion({ 
  question, 
  selectedAnswer, 
  showFeedback, 
  isCorrect, 
  feedback, 
  onAnswerSelect, 
  onContinue 
}) {
  return (
    <QuestionContainer role="region" aria-labelledby={`question-${question.id}`}>
      <QuestionNumber>{question.id}.</QuestionNumber>
      <QuestionText id={`question-${question.id}`}>{question.text}</QuestionText>
      
      <OptionsGrid>
        {question.options.map(option => (
          <OptionButton
            key={option.id}
            selected={selectedAnswer === option.id}
            onClick={() => onAnswerSelect(option.id)}
            disabled={showFeedback}
            aria-checked={selectedAnswer === option.id}
            role="radio"
          >
            {option.text}
          </OptionButton>
        ))}
      </OptionsGrid>
      
      {showFeedback && (
        <QuizFeedback
          isCorrect={isCorrect}
          feedback={feedback}
          onContinue={onContinue}
        />
      )}
    </QuestionContainer>
  );
}

export default QuizQuestion;
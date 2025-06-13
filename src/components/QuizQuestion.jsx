import { CheckBoxOutlined,  } from '@mui/icons-material';

import {
  QuestionContainer,
  QuestionText,
  OptionsGrid,
  OptionButton,
  ContinueButton,
  FeedbackText
} from "../styles/Quiz";

function QuizQuestion({
  question,
  selectedAnswer,
  showFeedback,
  feedback,
  onAnswerSelect,
  onContinue,
}) {
  return (
    <QuestionContainer role="region" aria-labelledby={`question-${question.id}`}>
      <QuestionText tabIndex="0"  id={`question-${question.id}`} >
          {question.id}. {question.text}
      </QuestionText>

      <OptionsGrid>
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            selected={selectedAnswer === option.id}
            onClick={() => !showFeedback && onAnswerSelect(option.id)}
            aria-checked={selectedAnswer === option.id}
            role="option"
            style={{
              backgroundColor:
                showFeedback
                  ? option.id === question.correctAnswer
                    ? "var(--green-button-color)"
                    : selectedAnswer === option.id
                    ? "var(--red-button-color)"
                    : ""
                  : "",
              color: showFeedback && option.id == question.correctAnswer ? "#272727" : "",
              cursor: showFeedback ? "default" : "pointer",
            }}
          >
            {option.text}
            {showFeedback}
          </OptionButton>
        ))}
      </OptionsGrid>

      {showFeedback && (
        <div className="feedbackDiv">
          <FeedbackText id={`feedback da questão-${feedback}`}>{feedback}</FeedbackText>
          <ContinueButton  aria-label="Botão para próxima pergunta" onClick={onContinue}>Próxima pergunta</ContinueButton>
        </div>
      )}
    </QuestionContainer>
  );
}

export default QuizQuestion;

import {
  QuestionContainer,
  QuestionText,
  OptionsGrid,
  OptionButton,
  ContinueButton,
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
      <QuestionText id={`question-${question.id}`}>{question.id}. {question.text}</QuestionText>

      <OptionsGrid>
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            selected={selectedAnswer === option.id}
            onClick={() => !showFeedback && onAnswerSelect(option.id)}
            aria-checked={selectedAnswer === option.id}
            role="radio"
            style={{
              backgroundColor:
                showFeedback
                  ? option.id === question.correctAnswer
                    ? "#4CAF50"
                    : selectedAnswer === option.id
                    ? "#B22222"
                    : ""
                  : "",
              color: showFeedback && option.id === question.correctAnswer ? "#FFFFFF" : "",
              cursor: showFeedback ? "default" : "pointer",
            }}
          >
            {option.text}
            {showFeedback && (
              <>
                {option.id === question.correctAnswer && (
                  <span role="img" aria-label="resposta correta">
                    ✅
                  </span>
                )}
                {selectedAnswer === option.id && option.id !== question.correctAnswer && (
                  <span role="img" aria-label="resposta errada">
                    ❌
                  </span>
                )}
              </>
            )}
          </OptionButton>
        ))}
      </OptionsGrid>

      {showFeedback && (
        <div className="feedback-popup">
          <p>{feedback}</p>
          <ContinueButton onClick={onContinue}>Próxima pergunta</ContinueButton>
        </div>
      )}
    </QuestionContainer>
  );
}

export default QuizQuestion;

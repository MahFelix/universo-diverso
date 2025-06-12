import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuizIntro from "../components/QuizIntro";
import QuizQuestion from "../components/QuizQuestion";
import QuizResult from "../components/QuizResult";
import { Container, ProgressBar, ProgressStep } from "../styles/Quiz";

const quizData = {
  title: "Quiz de Acessibilidade",
  description:
    "Vamos aprender juntos sobre como tornar a internet um lugar legal para todos!",
  questions: [
    {
      id: 1,
      text: "Por que é importante que todos possam usar a internet?",
      options: [
        { id: "a", text: "Porque é divertido compartilhar" },
        { id: "b", text: "Porque tem muitos jogos legais" },
        { id: "c", text: "Porque podemos aprender muitas coisas" },
        { id: "d", text: "Todas as respostas estão certas!" },
      ],
      correctAnswer: "d",
      feedback:
        "Isso mesmo! A internet é para todos se divertirem, aprenderem e compartilharem juntos! 🌈",
      incorrectFeedback:
        "Quase lá! Lembre-se que a internet tem muitas coisas legais para todos! 😊",
    },
    {
      id: 2,
      text: "Como podemos ajudar um amigo que não enxerga a usar o computador?",
      options: [
        { id: "a", text: "Com um leitor de tela especial" },
        { id: "b", text: "Descrevendo as imagens" },
        { id: "c", text: "Usando sons e músicas" },
        { id: "d", text: "Todas as formas ajudam!" },
      ],
      correctAnswer: "d",
      feedback:
        "Parabéns! Existem várias formas de ajudar nossos amigos a usarem o computador! 🌟",
      incorrectFeedback:
        "Tente novamente! Existem muitas maneiras de ajudar nossos amigos. 🤗",
    },
    {
      id: 3,
      text: "Qual é a melhor forma de fazer um vídeo para todos os amigos?",
      options: [
        { id: "a", text: "Colocando legendas coloridas" },
        { id: "b", text: "Usando uma linguagem simples" },
        { id: "c", text: "Falando devagar e claro" },
        { id: "d", text: "Todas as opções juntas!" },
      ],
      correctAnswer: "d",
      feedback:
        "Isso mesmo! Quanto mais formas diferentes de entender o vídeo, melhor para todos! 🎥✨",
      incorrectFeedback:
        "Continue tentando! Pense em como todos os amigos podem entender o vídeo. 🎬",
    },
    {
      id: 4,
      text: "O que é acessibilidade?",
      options: [
        { id: "a", text: "É um jogo muito legal" },
        { id: "b", text: "É uma forma de fazer amigos" },
        { id: "c", text: "É deixar tudo fácil para todos" },
        { id: "d", text: "É um tipo de brincadeira" },
      ],
      correctAnswer: "c",
      feedback:
        "Certinho! Acessibilidade é fazer com que todos possam participar facilmente! 🌈✨",
      incorrectFeedback:
        "Quase lá! Pense em como podemos ajudar todos a participarem juntos! 🤝",
    },
  ],
};

function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [canSelectAnswer, setCanSelectAnswer] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setCanSelectAnswer(true);
  }, []);

  const handleStartQuiz = () => {
    navigate("/quiz/questao/1");
    setCurrentQuestion(1);
  };

  const handleAnswerSelect = (questionId, answerId) => {
    if (!canSelectAnswer) return;

    setSelectedAnswer(answerId);
    const question = quizData.questions.find((q) => q.id === questionId);
    const correct = question.correctAnswer === answerId;

    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    }

    setShowFeedback(true);
    setCanSelectAnswer(false);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion <= quizData.questions.length) {
      navigate(`/quiz/questao/${nextQuestion}`);
      setCurrentQuestion(nextQuestion);
      setCanSelectAnswer(true);
    } else {
      navigate("/quiz/resultado");
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setCanSelectAnswer(true);
    navigate("/");
  };

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <QuizIntro
              title={quizData.title}
              description={quizData.description}
              onStart={handleStartQuiz}
            />
          }
        />

        {quizData.questions.map((question) => (
          <Route
            key={question.id}
            path={`questao/${question.id}`}
            element={
              <>
                <ProgressBar>
                  <ProgressStep active={currentQuestion >= 0}>Novo jogo</ProgressStep>

                  {quizData.questions.map((_, index) => (
                    <ProgressStep key={index} active={currentQuestion >= index + 1}>
                      Q{index + 1}
                    </ProgressStep>
                  ))}

                  <ProgressStep active={currentQuestion > quizData.questions.length}>
                    Fim
                  </ProgressStep>
                </ProgressBar>

                <QuizQuestion
                  question={question}
                  selectedAnswer={selectedAnswer}
                  showFeedback={showFeedback}
                  isCorrect={isCorrect}
                  feedback={isCorrect ? question.feedback : question.incorrectFeedback}
                  onAnswerSelect={(answerId) =>
                    handleAnswerSelect(question.id, answerId)
                  }
                  onContinue={handleContinue}
                  canSelectAnswer={canSelectAnswer}
                />
              </>
            }
          />
        ))}

        <Route
          path="resultado"
          element={
            <>
              <ProgressBar>
                <ProgressStep active>Novo Jogo</ProgressStep>

                {quizData.questions.map((q, index) => (
                  <ProgressStep key={q.id} active>
                    Q{index + 1}
                  </ProgressStep>
                ))}

                <ProgressStep active>Fim</ProgressStep>
              </ProgressBar>

              <QuizResult
                score={score}
                total={quizData.questions.length}
                onRestart={handleRestart}
              />
            </>
          }
        />
      </Routes>
    </Container>
  );
}

export default QuizContainer;
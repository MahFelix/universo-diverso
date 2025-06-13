import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuizIntro from "../components/QuizIntro";
import QuizQuestion from "../components/QuizQuestion";
import QuizResult from "../components/QuizResult";
import { Container, ProgressBar, ProgressStep } from "../styles/Quiz";

const quizData = {
  title: "Quiz de Acessibilidade",
  description:
    "Entenda as questões e desafios da acessibilidade para usuários com deficiência",
  questions: [
    {
      id: 1,
      text: "O que é um intérprete de Libras?",
      options: [
        { id: "a", text: "Uma pessoa que conta histórias" },
        { id: "b", text: "Uma pessoa que fala com os surdos através de sinais" },
        { id: "c", text: "Um mágico que faz truques com as mãos" },
        { id: "d", text: "Uma pessoa que dança" },
      ],
      correctAnswer: "b",
      feedback:
        "Isso mesmo! A Libras é a língua de sinais brasileira, usada para que as pessoas surdas possam se comunicar!",
      incorrectFeedback:
        "Não foi dessa vez. Um intérprete de Libras é pessoa que fala com os surdos através de sinais. A Libras é a língua de sinais brasileira, usada para que as pessoas surdas possam se comunicar!",
    },
    {
      id: 2,
      text: "Por que devemos perguntar como ajudar alguém, em vez de supor?",
      options: [
        { id: "a", text: "Porque é desinteressante" },
        { id: "b", text: "Para evitar conversas" },
        { id: "c", text: "Para garantir que a ajuda realmente atenda às necessidades da pessoa" },
        { id: "d", text: "Porque só algumas pessoas gostam de ajuda" },
      ],
      correctAnswer: "c",
      feedback:
        "Isso mesmo! Perguntar é uma maneira respeitosa de oferecer apoio!",
      incorrectFeedback:
        "Não foi dessa vez. Devemos perguntar antes de ajudar alguém, para garantir que a ajuda realmente atenda às necessidades da pessoa perguntar é uma maneira respeitosa de oferecer apoio!",
    },
    {
      id: 3,
      text: "O que é acessibilidade digital",
      options: [
        { id: "a", text: "Uma maneira de conectar computadores" },
        { id: "b", text: "Aumentar a velocidade de internet" },
        { id: "c", text: "Um novo tipo de jogo" },
        { id: "d", text: "Garantir que pessoas com diferentes habilidades possam usar sites e aplicativos" },

      ],
      correctAnswer: "d",
      feedback:
        "Isso mesmo! A acessibilidade digital é essencial para todos terem acesso à informação online!",
      incorrectFeedback:
        "Não foi dessa vez. Acessibilidade digital é garantir que pessoas com diferentes habilidades possam usar sites e aplicativos a acessibilidade digital é essencial para todos terem acesso à informação online!",
    },
    {
      id: 4,
      text: "O que podemos fazer se um amigo autista não quiser participar de uma atividade?",
      options: [
        { id: "a", text: "Forçá-lo a ir" },
        { id: "b", text: "Respeitar sua escolha e oferecer apoio, se ele mudar de ideia" },
        { id: "c", text: "Falar mal dele" },
        { id: "d", text: "Ignorar o que ele sente" },
      ],
      correctAnswer: "b",
      feedback:
        "Isso mesmo! É essencial respeitar as decisões de cada pessoa e ser um amigo compreensivo!",
      incorrectFeedback:
        "Não foi dessa vez. Se seu amigo não quiser participar, você deve respeitar sua escolha e oferecer apoio, se ele mudar de ideia. É essencial respeitar as decisões de cada pessoa e ser um amigo compreensivo!",
    },
    {
      id: 5,
      text: "Por que é importante ter legendas em filmes?",
      options: [
        { id: "a", text: "Porque é bonito" },
        { id: "b", text: "Para que pessoas surdas ou com dificuldades auditivas possam entender e aproveitar o filme" },
        { id: "c", text: "Para que as pessoas que falam outras línguas possam entender" },
        { id: "d", text: " Apenas para adicionar informações" },
      ],
      correctAnswer: "b",
      feedback:
        "Isso mesmo!  As legendas garantem que todos possam aproveitar as histórias contadas nos filmes!",
      incorrectFeedback:
        "Não foi dessa vez. As legendas são importantes para que pessoas surdas ou com dificuldades auditivas possam entender e aproveitar o filme. Elas garantem que todos possam aproveitar as histórias contadas nos filmes!",
    },
    {
      id: 6,
      text: "Como as rampas ajudam as pessoas?",
      options: [
        { id: "a", text: "Elas não ajudam" },
        { id: "b", text: "Elas são perigosas" },
        { id: "c", text: "Elas servem apenas para os cães" },
        { id: "d", text: "Elas permitem que pessoas com dificuldades de mobilidade entrem em locais altos" },
      ],
      correctAnswer: "d",
      feedback:
        "Isso mesmo! Elas permitem que pessoas com dificuldades de mobilidade entrem em locais altos. Rampas são essenciais para garantir que todos consigam acessar diferentes lugares!",
      incorrectFeedback:
        "Não foi dessa vez. As rampas permitem que pessoas com dificuldades de mobilidade entrem em locais altos. Rampas são essenciais para garantir que todos consigam acessar diferentes lugares!",
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
                <ProgressBar  >
                  <ProgressStep  tabIndex="0" role="cell" id="Novo Jogo" active={currentQuestion >= 0}>
                    Novo jogo
                  </ProgressStep>

                  {quizData.questions.map((_, index) => (
                    <ProgressStep tabIndex="0" role="cell" id={`question-${question.id}`} key={index} active={currentQuestion >= index + 1}>
                      Q{index + 1}
                    </ProgressStep>
                  ))}

                  <ProgressStep tabIndex="0" role="cell" id="Fim" active={currentQuestion > quizData.questions.length}>
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
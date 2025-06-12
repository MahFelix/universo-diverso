import React from 'react';
import ActivityCard from '../components/ActivityCard';
import Header from '../components/Header';
import {PageContainer, SectionContainer, SectionTitle, CardGrid} from '../styles/ActivitiesPage';

const ActivitiesPage = () => {
  // Dados das atividades (normalmente viriam de uma API)
  const activitiesInProgress = [
    {
      id: 1,
      bgColor: '#FF9800',
      type: 'Jogo',
      progress: 50,
      title: 'Trilha da Inclusão',
      description: 'Um jogo de tabuleiro digital sobre conceitos de acessibilidade e inclusão',
      buttonText: 'Continuar Jogando'
    },
    {
      id: 2,
      bgColor: '#4CAF50',
      type: 'História',
      progress: 30,
      title: 'Joana vai às compras',
      description: 'A história de Joana e os desafios de mobilidade que ela encontra na cidade. Explore e decida!',
      buttonText: 'Ler mais agora'
    }
  ];

  const newActivities = [
    {
      id: 3,
      bgColor: '#03A9F4',
      type: 'Tutorial',
      title: 'Questão de Acessibilidade',
      description: 'Entenda as questões e desafios da acessibilidade digital para usuários com deficiência',
      buttonText: 'Clique para aprender'
    },
    {
      id: 4,
      bgColor: '#FF5252',
      type: 'História',
      title: 'Meu melhor amigo',
      description: 'Descubra como uma amizade pode trazer força e inclusão para todos nós',
      buttonText: 'Clique para ler'
    },
    {
      id: 5,
      bgColor: '#4CAF50',
      type: 'Jogo',
      title: 'Caça ao Tesouro da Acessibilidade',
      description: 'Encontre os pontos críticos e aprenda como tornar ambientes mais acessíveis',
      buttonText: 'Clique para jogar'
    },
    {
      id: 6,
      bgColor: '#03A9F4',
      type: 'Tutorial',
      title: 'Missão de Inclusão',
      description: 'Ajude Sara a encontrar uma alternativa para participar das atividades na escola',
      buttonText: 'Clique para aprender'
    },
    {
      id: 7,
      bgColor: '#9C27B0',
      type: 'Jogo',
      title: 'Desafios de Empatia',
      description: 'Coloque-se no lugar do outro em situações do dia a dia e descubra como ser mais inclusivo',
      buttonText: 'Clique para jogar',
    },
    {
      id: 8,
      bgColor: '#FF9800',
      type: 'História',
      title: 'Não quero me mudar!',
      description: 'A história de como uma mudança de escola pode ser desafiadora para crianças neurodivergentes',
      buttonText: 'Clique para ler'
    },
    {
      id: 9,
      bgColor: '#4CAF50',
      type: 'História',
      title: 'O passeio da escola',
      description: 'Participe de um passeio escolar inclusivo e aprenda sobre acessibilidade',
      buttonText: 'Clique para ler'
    }
  ];

  const completedActivities = [
    {
      id: 10,
      bgColor: '#E040FB',
      type: 'Jogo',
      progress: 100,
      title: 'Jogo da Inclusão de Palavras',
      description: 'Aprenda palavras e termos adequados ao falar sobre pessoas com deficiência',
      buttonText: 'Jogar novamente',
    },
    {
      id: 11,
      bgColor: '#FF5252',
      type: 'História',
      progress: 100,
      title: 'O aniversário da Mariana',
      description: 'Veja como uma festa de aniversário pode ser adaptada para incluir todos os amigos',
      buttonText: 'Ler novamente'
    }
  ];

  // Manipulador de cliques nos cards
  const handleCardClick = (activity) => {
    console.log(`Atividade clicada: ${activity.title}`);
    // Aqui você pode implementar navegação para a atividade específica
  };

  return (
    <PageContainer>
      <Header/>

      <SectionContainer>
        <SectionContainer>
          <SectionTitle>Atividades já iniciadas</SectionTitle>
          <CardGrid>
            {activitiesInProgress.map(activity => (
              <ActivityCard 
                key={activity.id}
                {...activity}
                onClick={() => handleCardClick(activity)}
              />
            ))}
          </CardGrid>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Novas Atividades</SectionTitle>
          <CardGrid>
            {newActivities.map(activity => (
              <ActivityCard 
                key={activity.id}
                {...activity}
                onClick={() => handleCardClick(activity)}
              />
            ))}
          </CardGrid>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>Atividades já finalizadas</SectionTitle>
          <CardGrid>
            {completedActivities.map(activity => (
              <ActivityCard 
                key={activity.id}
                {...activity}
                onClick={() => handleCardClick(activity)}
              />
            ))}
          </CardGrid>
        </SectionContainer>

      </SectionContainer>

      
    </PageContainer>
  );
};

export default ActivitiesPage;
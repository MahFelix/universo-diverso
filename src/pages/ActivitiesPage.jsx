/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import Header from '../components/Header';
import {LibraryAddCheckOutlined} from '@mui/icons-material';
import {PageContainer, SectionContainer, SectionTitle, SectionTitleText, CardGrid} from '../styles/ActivitiesPage';


  export const activitiesInProgress = [
    {
      id: 1,
      bgColor: 'var(--yellow-card)',
      type: 'Jogo',
      progress: 50,
      title: 'Trilha da Inclusão',
      description: 'Um jogo de tabuleiro digital sobre conceitos de acessibilidade e inclusão',
      buttonText: 'Continuar Jogando'
    },
    {
      id: 2,
      bgColor: 'var(--orange-card)',
      type: 'História',
      progress: 30,
      title: 'Joana vai às compras',
      description: 'A história de Joana e os desafios de mobilidade que ela encontra na cidade. Explore e decida!',
      buttonText: 'Ler mais agora'
    }
  ];

  export const newActivities = [
    {
      id: 3,
      bgColor: 'var(--pink-card)',
      type: 'História',
      title: 'Meu melhor amigo',
      description: 'Descubra como uma amizade pode trazer força e inclusão para todos nós',
      buttonText: 'Clique para ler'
    },
    {
      id: 4,
      bgColor: 'var(--purple-card)',
      type: 'Jogo',
      title: 'Caça ao Tesouro da Acessibilidade',
      description: 'Encontre os pontos críticos e aprenda como tornar ambientes mais acessíveis',
      buttonText: 'Clique para jogar'
    },
    {
      id: 5,
      bgColor: 'var(--blue-card)',
      type: 'Tutorial',
      title: 'Questão de Acessibilidade',
      description: 'Entenda as questões e desafios da acessibilidade para usuários com deficiência',
      buttonText: 'Clique para aprender',
      onClick: '/quiz'
    },
    {
      id: 6,
      bgColor: 'var(--green-card)',
      type: 'Tutorial',
      title: 'Missão de Inclusão',
      description: 'Ajude Sara a encontrar uma alternativa para participar das atividades na escola',
      buttonText: 'Clique para aprender'
    },
    {
      id: 7,
      bgColor: 'var(--yellow-card)',
      type: 'Jogo',
      title: 'Desafios de Empatia',
      description: 'Coloque-se no lugar do outro em situações do dia a dia e descubra como ser mais inclusivo',
      buttonText: 'Clique para jogar',
    },
    {
      id: 8,
      bgColor: 'var(--orange-card)',
      type: 'História',
      title: 'Não quero me mudar!',
      description: 'A história de como uma mudança de escola pode ser desafiadora para crianças neurodivergentes',
      buttonText: 'Clique para ler'
    },
    {
      id: 9,
      bgColor: 'var(--pink-card)',
      type: 'História',
      title: 'O passeio da escola',
      description: 'Participe de um passeio escolar inclusivo e aprenda sobre acessibilidade',
      buttonText: 'Clique para ler'
    }
  ];

  export const completedActivities = [
    {
      id: 10,
      bgColor: 'var(--purple-card)',
      type: 'Jogo',
      progress: 100,
      title: 'Jogo da Inclusão de Palavras',
      description: 'Aprenda palavras e termos adequados ao falar sobre pessoas com deficiência',
      buttonText: 'Jogar novamente',
    },
    {
      id: 11,
      bgColor: 'var(--blue-card)',
      type: 'História',
      progress: 100,
      title: 'O aniversário da Mariana',
      description: 'Veja como uma festa de aniversário pode ser adaptada para incluir todos os amigos',
      buttonText: 'Ler novamente'
    }
  ];

const ActivitiesPage = () => {
   const navigate = useNavigate();
 const handleCardClick = (activity) => {
    if (activity.onClick) {
      navigate(activity.onClick); 
    } else {
      console.log(`Atividade clicada: ${activity.title}`);
    
    }
  };

  

  return (
    <PageContainer>
      <Header/>

       <SectionContainer>
        <SectionContainer>
          <SectionTitle>
            <LibraryAddCheckOutlined aria-label="ícone de atividades"/>
            <SectionTitleText>Atividades já iniciadas</SectionTitleText>
          </SectionTitle>
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
          <SectionTitle>
            <LibraryAddCheckOutlined aria-label="ícone de atividades"/>
            <SectionTitleText>Novas Atividades</SectionTitleText>
          </SectionTitle>
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
          <SectionTitle>
            <LibraryAddCheckOutlined aria-label="ícone de atividades"/>
            <SectionTitleText>Atividades já finalizadas</SectionTitleText>
          </SectionTitle>
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
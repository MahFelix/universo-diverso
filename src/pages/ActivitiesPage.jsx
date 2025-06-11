// ActivitiesPage.jsx
import React from 'react';
import styled from 'styled-components';
import { List, Planet, SpeakerHigh, Star, User } from '@phosphor-icons/react';
import ActivityCard from '../components/ActivityCard';

// Estilos do componente
const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.header`
  background: linear-gradient(90deg, #54c1d3 0%, #3cb878 100%);
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PlanetIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffa726;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 36px;
    height: 9px;
    background-color: #ffa726;
    border-radius: 50%;
    transform: rotate(-15deg);
  }

  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #ff5252;
    border-radius: 50%;
    bottom: 4px;
    right: 6px;
  }
`;

const BrandName = styled.h1`
  font-size: 18px;
  color: #000;
  font-weight: 600;
`;

const PointsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffef62;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
`;

const UserButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #9c27b0;
  font-size: 20px;
`;

const PageTitle = styled.h1`
  font-size: 22px;
  color: #000;
  padding: 0 16px;
`;

const SectionContainer = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  margin: 16px 0;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  color: #000;
  margin-bottom: 16px;
  font-weight: 600;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

// Componente principal de Atividades
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
      buttonText: 'Jogar mais agora'
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
      buttonText: 'Iniciar para jogar'
    },
    {
      id: 4,
      bgColor: '#FF5252',
      type: 'História',
      title: 'Meu melhor amigo',
      description: 'Descubra como uma amizade pode trazer força e inclusão para todos nós',
      buttonText: 'Clique para jogar'
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
      buttonText: 'Clique para jogar'
    },
    {
      id: 7,
      bgColor: '#9C27B0',
      type: 'Jogo',
      title: 'Desafios de Empatia',
      description: 'Coloque-se no lugar do outro em situações do dia a dia e descubra como ser mais inclusivo',
      buttonText: 'Clique para jogar',
      textColor: '#fff',
      iconColor: '#fff'
    },
    {
      id: 8,
      bgColor: '#FF9800',
      type: 'História',
      title: 'Não quero me mudar!',
      description: 'A história de como uma mudança de escola pode ser desafiadora para crianças neurodivergentes',
      buttonText: 'Clique para jogar'
    },
    {
      id: 9,
      bgColor: '#4CAF50',
      type: 'História',
      title: 'O passeio da escola',
      description: 'Participe de um passeio escolar inclusivo e aprenda sobre acessibilidade',
      buttonText: 'Clique para jogar'
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
      textColor: '#fff',
      iconColor: '#fff'
    },
    {
      id: 11,
      bgColor: '#FF5252',
      type: 'História',
      progress: 100,
      title: 'O aniversário da Mariana',
      description: 'Veja como uma festa de aniversário pode ser adaptada para incluir todos os amigos',
      buttonText: 'Jogar novamente'
    }
  ];

  // Manipulador de cliques nos cards
  const handleCardClick = (activity) => {
    console.log(`Atividade clicada: ${activity.title}`);
    // Aqui você pode implementar navegação para a atividade específica
  };

  return (
    <PageContainer>
      <PageTitle>Atividades</PageTitle>
      
      <Header>
        <HeaderLeft>
          <MenuButton aria-label="Menu de navegação">
            <List weight="bold" />
          </MenuButton>
          <Logo>
            <PlanetIcon aria-hidden="true" />
            <BrandName>Universo Diverso</BrandName>
          </Logo>
          <MenuButton aria-label="Controles de áudio">
            <SpeakerHigh weight="fill" />
          </MenuButton>
        </HeaderLeft>
        <HeaderRight>
          <PointsContainer aria-label="Pontuação do usuário: 120 pontos">
            <Star weight="fill" color="#FFB300" aria-hidden="true" />
            <span>120 pontos</span>
          </PointsContainer>
          <UserButton aria-label="Perfil do usuário">
            <User weight="fill" aria-hidden="true" />
          </UserButton>
        </HeaderRight>
      </Header>

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
    </PageContainer>
  );
};

export default ActivitiesPage;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopNav from '../components/NavbarHeader';
import Sidebar from '../components/Sidebar';
import ActivityCard from '../components/ActivityCard';
import rocketIllustration from '../assets/foguete.png';
import { ChartLineUp, Rocket, Users, Video, PuzzlePiece } from '@phosphor-icons/react';

const AppContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column-reverse' : 'row'};
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${props => props.isMobile ? '0 16px 70px' : '0 24px 24px'};
  background-color: #ffffff;
`;

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: ${props => props.isMobile ? 'center' : 'left'};
  gap: ${props => props.isMobile ? '16px' : '0'};

  h2 {
    font-size: ${props => props.isMobile ? '18px' : '20px'};
    margin-bottom: 8px;
    color: var(--text-color);
  }
`;

const WelcomeText = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 6px;
    color: #A71A5B;
   
  }

  p {
    color: #666;
    font-size: 14px;
  }
`;

const WelcomeImage = styled.div`
  img {
    width: 80px;
    height: auto;
  }
`;

const ActivitiesSection = styled.section`
  margin-top: 24px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 500;
  }

  .view-all {
    font-size: 14px;
    color: var(--primary-color);
    cursor: pointer;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.isMobile ? '1fr' : 'repeat(5, 1fr)'};
  gap: ${props => props.isMobile ? '12px' : '16px'};
`;

const MainPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContainer isMobile={isMobile}>
      <Sidebar isMobile={isMobile} />
      <MainContent isMobile={isMobile}>
        <TopNav />
        
        <WelcomeSection isMobile={isMobile}>
          <WelcomeText>
            <h2>Bem-vinda de volta, user!</h2>
            <p>Continue sua jornada de aprendizado e diversão!</p>
          </WelcomeText>
          <WelcomeImage>
            <img src={rocketIllustration} alt="Ilustração de foguete" />
          </WelcomeImage>
        </WelcomeSection>
        
        <ActivitiesSection>
          <SectionHeader>
            <h3>Suas Atividades</h3>
            <span className="view-all">Ver todas</span>
          </SectionHeader>
          
          <ActivitiesGrid isMobile={isMobile}>
       
          </ActivitiesGrid>
        </ActivitiesSection>
      </MainContent>
    </AppContainer>
  );
};

export default MainPage;
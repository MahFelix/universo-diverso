import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ActivityCard from '../components/ActivityCard';
import rocketIllustration from '../assets/foguete.png';
import {AppContainer, MainContent, WelcomeSection, WelcomeText, WelcomeImage, 
  ActivitiesSection, SectionHeader, ActivitiesGrid} from '../styles/MainPageStyles';

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
        <Header />
        
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
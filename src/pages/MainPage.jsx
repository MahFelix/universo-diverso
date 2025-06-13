// MainPage.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import rocketIllustration from '../assets/foguete.png';
import {LibraryAddCheckOutlined} from '@mui/icons-material';
import { activitiesInProgress, newActivities } from './ActivitiesPage';  
import {AppContainer, MainContent, WelcomeSection, WelcomeText, WelcomeImage, 
  ActivitiesSection, SectionHeader, ActivitiesGrid, SectionA} from '../styles/MainPageStyles';

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

  // Pegamos os 2 primeiros objetos de cada array
  const recentActivities = [
    ...activitiesInProgress.slice(0,2),
    ...newActivities.slice(0,3)
  ];

  return (
    <AppContainer isMobile={isMobile}> 
      <Header/>
      <MainContent isMobile={isMobile}>
               
        <WelcomeSection isMobile={isMobile}>
          <WelcomeText>
            <h2>Bem-vindo de volta, Jogador!</h2>
            <p>Continue sua jornada de aprendizado e diversão!</p>
          </WelcomeText>
          <WelcomeImage>
            <img src={rocketIllustration} alt="Ilustração de foguete" />
          </WelcomeImage>
        </WelcomeSection>
        
        <ActivitiesSection>
          <SectionHeader>
            <SectionA>
            <LibraryAddCheckOutlined/>
            <h3>Suas Atividades</h3>
            </SectionA>
         <a className="view-all" href="/activities">Ver todas</a>
          </SectionHeader>
          
          <ActivitiesGrid isMobile={isMobile}>
            {recentActivities.map(activity => (
              <ActivityCard 
                key={activity.id}
                {...activity}
                onClick={() => console.log(`Atividade clicada: ${activity.title}`)}
              />
            ))}
          </ActivitiesGrid>
        </ActivitiesSection>
      </MainContent>
    </AppContainer>
  );
};

export default MainPage;
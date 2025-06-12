import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column-reverse' : 'row'};
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${props => props.isMobile ? '0 16px 70px' : '0 24px 24px'};
  background-color: #ffffff;
`;

export const WelcomeSection = styled.section`
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

export const WelcomeText = styled.div`
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

export const WelcomeImage = styled.div`
  img {
    width: 80px;
    height: auto;
  }
`;

export const ActivitiesSection = styled.section`
  margin-top: 24px;
`;

export const SectionHeader = styled.div`
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
    color: #000;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SectionA = styled.div`
  display: flex;
  margin-right: 20px;
  gap: 5px;
  margin-bottom: 10px;


  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 6px;
  }

  ;`

export const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.isMobile ? '1fr' : 'repeat(5, 1fr)'};
  gap: ${props => props.isMobile ? '12px' : '16px'};

`;

export const ActivityCard = styled.div`
  background-color: ${props => props.bgColor || '#f9f9f9'};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1%;
`;
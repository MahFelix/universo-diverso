/* eslint-disable no-unused-vars */

import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
  align-items: ${props => props.isMobile ? 'center' : 'flex-start'};
  gap: 8px;
  color: var(--card-text);
  background-color: ${props => `var(--${props.color}-card)`};
`;

const CardTitle = styled.h4`
  font-size: ${props => props.isMobile ? '14px' : '16px'};
  font-weight: 500;
`;

const CardDescription = styled.p`
  font-size: 12px;
  margin-bottom: 12px;
  opacity: 0.9;
  display: ${props => props.isMobile ? 'none' : 'block'};
`;

const CardLink = styled.a`
  color: var(--card-text);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  margin-left: ${props => props.isMobile ? 'auto' : '0'};
`;

const IconWrapper = styled.div`
  margin-right: ${props => props.isMobile ? '10px' : '0'};
  
  svg {
    font-size: 24px;
    color: white;
  }
`;

const ActivityCard = ({ title, description, color, icon: Icon, isMobile = false }) => {
  return (
    <CardContainer color={color} isMobile={isMobile}>
      <IconWrapper isMobile={isMobile}>
        <Icon weight="fill" />
      </IconWrapper>
      <CardTitle isMobile={isMobile}>{title}</CardTitle>
      <CardDescription isMobile={isMobile}>{description}</CardDescription>
      <CardLink href="#" isMobile={isMobile}>Iniciar agora</CardLink>
    </CardContainer>
  );
};

export default ActivityCard;
import React from 'react';
import styled from 'styled-components';
import { House, Book, ChartBar, Gear } from '@phosphor-icons/react';

const SidebarContainer = styled.aside`
  width: ${props => props.isMobile ? '100%' : '240px'};
  background-color: var(--sidebar-bg);
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
  gap: ${props => props.isMobile ? '0' : '30px'};
  
  ${props => props.isMobile && `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    padding: 10px;
    z-index: 100;
  `}
`;

const SidebarHeader = styled.div`
  display: ${props => props.isMobile ? 'none' : 'flex'};
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
`;

const SidebarNav = styled.nav`
  width: 100%;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: ${props => props.isMobile ? 'row' : 'column'};
    justify-content: ${props => props.isMobile ? 'space-around' : 'flex-start'};
    gap: ${props => props.isMobile ? '0' : '20px'};
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    align-items: center;
    gap: ${props => props.isMobile ? '4px' : '10px'};
    cursor: pointer;
    padding: 8px 0;
    color: #666;
    text-align: ${props => props.isMobile ? 'center' : 'left'};
    
    svg {
      font-size: ${props => props.isMobile ? '20px' : '16px'};
    }
  }
`;

const Sidebar = ({ isMobile = false }) => {
  return (
    <SidebarContainer isMobile={isMobile}>
      <SidebarHeader isMobile={isMobile}>
        <House weight="fill" />
        <span>Home</span>
      </SidebarHeader>
      <SidebarNav isMobile={isMobile}>
        <ul>
          <li>
            <House />
            <span>Home</span>
          </li>
          <li>
            <Book />
            <span>Atividades</span>
          </li>
          <li>
            <ChartBar />
            <span>Progresso</span>
          </li>
          <li>
            <Gear />
            <span>Configurações</span>
          </li>
        </ul>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
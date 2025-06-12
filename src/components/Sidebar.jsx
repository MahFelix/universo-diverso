import React from 'react';
import styled from 'styled-components';
import { House, Book, ChartBar, Gear } from '@phosphor-icons/react';
import {SidebarContainer, SidebarHeader, SidebarNav} from '../styles/Sidebar';

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
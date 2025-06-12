import React from 'react';
import planetIcon from '../assets/planet.png';
import {MenuOutlined, VolumeUpOutlined, StarBorderRounded, AccountCircleOutlined} from '@mui/icons-material';
import {NavContainer, LogoContainer, HeaderLeft, HeaderRight, BrandName, PointsContainer, UserProfile} from '../styles/Header';

const TopNav = () => {
  return (
    <NavContainer>
      <HeaderLeft>
        <MenuOutlined aria-label="Menu de navegação"/>
        <LogoContainer>
          <img src={planetIcon} alt="Universo Diverso Logo" className="logo" />
        </LogoContainer>
        <BrandName>Universo Diverso</BrandName>
        <VolumeUpOutlined aria-label="Habilitar ou desabilitar o áudio"/>
      </HeaderLeft>

      <HeaderRight>
        <PointsContainer aria-label="Pontuação do usuário">
          <StarBorderRounded aria-label="Estrela" />
          <span>120 pontos</span>
        </PointsContainer>
        
        <UserProfile>
          <AccountCircleOutlined aria-label="Perfil do usuário"/>
        </UserProfile>
      </HeaderRight>      
    </NavContainer>
  );
};

export default TopNav;

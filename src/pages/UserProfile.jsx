/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Planet, SpeakerHigh, Star, PencilSimple, User } from '@phosphor-icons/react';

const ProfileContainer = styled.div`
  background-color: #c5edf5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #54c1d3;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const ProfileTitle = styled.h1`
  font-size: 24px;
  color: #000;
  font-weight: 600;
  margin-bottom: 40px;
`;

const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0c5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 2px solid #9c27b0;
`;

const AvatarPlaceholder = styled.div`
  color: #9c27b0;
  font-size: 40px;
`;

const ProfileInfoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 16px;
  justify-content: space-between;
`;

const InfoText = styled.span`
  font-size: 16px;
  color: #000;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const UserProfileComponent = () => {
  // Dados do usuário (podem vir de uma API ou contexto)
  const [user, setUser] = useState({
    name: 'Jogador',
    email: 'jogador@email.com',
    points: 120
  });

  const handleEdit = (field) => {
    // Implementação da edição dos campos
    console.log(`Editando campo: ${field}`);
    // Aqui você pode abrir um modal ou implementar edição inline
  };

  return (
    <ProfileContainer>
      <Header>
        <HeaderLeft>
          <MenuButton>
            <List weight="bold" />
          </MenuButton>
          <Logo>
            <PlanetIcon />
            <BrandName>Universo Diverso</BrandName>
          </Logo>
          <MenuButton>
            <SpeakerHigh weight="fill" />
          </MenuButton>
        </HeaderLeft>
        <HeaderRight>
          <PointsContainer>
            <Star weight="fill" color="#FFB300" />
            <span>{user.points} pontos</span>
          </PointsContainer>
          <UserButton>
            <User weight="fill" />
          </UserButton>
        </HeaderRight>
      </Header>

      <ProfileContent>
        <ProfileTitle>Meu Perfil</ProfileTitle>
        
        <ProfileAvatar>
          <AvatarPlaceholder>
            <User weight="light" />
          </AvatarPlaceholder>
        </ProfileAvatar>
        
        <ProfileInfoContainer>
          <ProfileInfoItem>
            <InfoText>{user.name}</InfoText>
            <EditButton onClick={() => handleEdit('name')}>
              <PencilSimple weight="bold" />
            </EditButton>
          </ProfileInfoItem>
          
          <ProfileInfoItem>
            <InfoText>{user.email}</InfoText>
            <EditButton onClick={() => handleEdit('email')}>
              <PencilSimple weight="bold" />
            </EditButton>
          </ProfileInfoItem>
        </ProfileInfoContainer>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default UserProfileComponent;
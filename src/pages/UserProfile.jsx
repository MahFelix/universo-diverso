/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Planet, SpeakerHigh, Star, PencilSimple, User } from '@phosphor-icons/react';
import Header from '../components/Header';
import {ProfileContainer, ProfileContent, ProfileTitle, ProfileAvatar, AvatarPlaceholder, 
  ProfileInfoContainer, ProfileInfoItem, InfoText, EditButton} from '../styles/UserProfile';

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
      <Header/>

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
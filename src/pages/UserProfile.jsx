/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from '../components/Header';
import {PersonOutlined, EditOutlined} from '@mui/icons-material';
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
        
        <ProfileAvatar aria-label="Avatar genérico">
          <AvatarPlaceholder >
            <PersonOutlined/>
          </AvatarPlaceholder>
        </ProfileAvatar>
        
        <ProfileInfoContainer>
          <ProfileInfoItem aria-label="Nome do usuário">
            <InfoText>{user.name}</InfoText>
            <EditButton onClick={() => handleEdit('name')} aria-label="Botão de editar" >
              <EditOutlined aria-label="Botão de editar" weight="bold" />
            </EditButton>
          </ProfileInfoItem>
          
          <ProfileInfoItem aria-label="e-mail do usuário">
            <InfoText>{user.email}</InfoText>
            <EditButton onClick={() => handleEdit('email')} aria-label="Botão de editar">
              <EditOutlined aria-label="Botão de editar" weight="bold" />
            </EditButton>
          </ProfileInfoItem>
        </ProfileInfoContainer>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default UserProfileComponent;
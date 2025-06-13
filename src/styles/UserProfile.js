import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #c5edf5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

export const ProfileTitle = styled.h1`
  font-size: 24px;
  color: #000;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0c5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 4px solid #9c27b0;
`;

export const AvatarPlaceholder = styled.div`
  color: #9c27b0;
  scale: 2.0;
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 16px;
  justify-content: space-between;
`;

export const InfoText = styled.span`
  font-size: 16px;
  color: #000;
`;

export const EditButton = styled.div`
  cursor: pointer;
`;
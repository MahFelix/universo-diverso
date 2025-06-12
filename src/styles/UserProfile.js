import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #c5edf5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #54c1d3;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PlanetIcon = styled.div`
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

export const BrandName = styled.h1`
  font-size: 18px;
  color: #000;
  font-weight: 600;
`;

export const PointsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffef62;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
`;

export const UserButton = styled.button`
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
  border: 2px solid #9c27b0;
`;

export const AvatarPlaceholder = styled.div`
  color: #9c27b0;
  font-size: 40px;
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

export const EditButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
`;
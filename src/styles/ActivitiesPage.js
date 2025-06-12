import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Header = styled.header`
  background: linear-gradient(90deg, #54c1d3 0%, #3cb878 100%);
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

export const PageTitle = styled.h1`
  font-size: 22px;
  color: #000;
  padding: 0 16px;
`;

export const SectionContainer = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  margin: 16px 0;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: #000;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;
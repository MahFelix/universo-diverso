import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #54c1d3 0%, #3cb878 100%);
  height: 60px;
  padding: 12px 16px;
  margin-bottom: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .logo {
    width: 60px;
    height: 60px;
  }
`;

export const BrandName = styled.div`
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

export const UserProfile = styled.div`
  .AccountCircleOutlined {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export const StarImg = styled.img`
  width: 60px;`

import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  background: #12C1D4;
background: linear-gradient(90deg, rgba(18, 193, 212, 1) 0%, rgba(26, 223, 85, 1) 100%);
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
  color: white;
  font-family: 'Poppins', sans-serif;
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

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  

  h1 {
    width: 200px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Badge = styled.span`
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;  
  margin-left: -50px;
  
`;

export const PointsDisplay = styled.div`
  background-color: #ffef62;
  padding: 6px 12px;
  border-radius: 20px;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-left: 120vh;
`;

export const UserProfile = styled.div`
  .avatar {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export const StarImg = styled.img`
  width: 60px;`

import styled from 'styled-components';
import { Menu, Avatar, Button } from '@mui/material';

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
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .logo {
    width: 60px;
    height: 60px;

     @media (max-width: 768px) {
   margin-left:-22px;
  }
  }

   @media (max-width: 768px) {
   margin-right:-20px;
  }
`;

export const MenuItemMobile = styled.div`
  display: none;
  align-items: center;
    padding: 12px 16px;
  
  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;


export const BrandName = styled.div`
  font-size: 18px;
  color: #000;
  font-weight: 600;

  @media (max-width: 768px) {
      margin-right: 10px;
  }
`;


export const PointsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffef62;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
`;

export const StyledMenu = styled(Menu)`
  && {
    .MuiPaper-root {
      min-width: 180px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
    }
    
    .MuiMenuItem-root {
      padding: 10px 16px;
      font-size: 14px;
      
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

export const MenuOutlined = styled.img`
  display: flex;
  align-items: center;
  gap: 20px;
   cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #ffef62;
    }
  }
`;


export const MenuButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  
  &:focus {
    outline: 2px solid #4d90fe;
    outline-offset: 2px;
  }
`;


export const MenuItem = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s;
  background-color: #fff;

  display: flex;
  align-items: center;

  img {
    width: 24px;
    margin-right: 12px;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #1890ff;
    }
  }
`;


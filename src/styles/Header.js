import styled from 'styled-components';
import { Menu } from '@mui/material';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg,var(--header-background-color-1) 0%,var(--header-background-color-2) 100%);
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

export const BannerWebsite = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BrandName = styled.h2`
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
  background-color: var(--points-background);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
`;

export const MenuButton = styled.div`
  cursor: pointer;
  padding: 10px;
  color: var(--primary-color);
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
        background-color: var(--menu-background-color-hover);
      }
    }
  }
`;

export const MenuItem = styled.li`
  padding: 12px 16px;
  transition: background-color 0.3s;

  display: flex;
  align-items: center;

  }
`;


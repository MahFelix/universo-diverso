import React, { useState } from 'react';
import planetIcon from '../assets/planet.png';
import IconA from '../assets/icon.png';
import IconHome from '../assets/home.png';
import IconProfile from '../assets/account_circle.png';
import IconLogout from '../assets/arrow_back.png';
import { Menu, MenuItem, Avatar, Button } from '@mui/material';
import { MenuOutlined, VolumeUpOutlined, StarBorderRounded,  Logout, AccountCircle } from '@mui/icons-material';
import { NavContainer, LogoContainer, HeaderLeft, MenuItemMobile, HeaderRight,UserAvatar, StyledMenu, BrandName, MenuButton, MenuList,PointsContainer, UserProfileButton } from '../styles/Header';

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer>
      <HeaderLeft>
        <div style={{ position: 'relative' }}>
          <MenuButton
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Menu de navegação"
          >
            <MenuOutlined style={{ fontSize: '20px', marginRight: '8px' }} />
          </MenuButton>

          <MenuList $isOpen={isMenuOpen}>
            <MenuItem> 
              <img src={IconHome}></img>
              <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
            </MenuItem>

              <MenuItemMobile onClick={handleClose}>
            <img src={IconA} width={24}></img>
              <a href="/activities" onClick={() => setIsMenuOpen(false)}>Atividades</a>
            </MenuItemMobile>

            <MenuItem>
             <img src={IconProfile}></img>
              <a href="/userProfile" onClick={() => setIsMenuOpen(false)}>Meu Perfil</a>
            </MenuItem>

              <MenuItemMobile onClick={handleClose}>
                 <img src={IconLogout}></img>
              <a href="/Logout" onClick={() => setIsMenuOpen(false)}>Sair</a>
            </MenuItemMobile>

          </MenuList>
        </div>
        <LogoContainer>
          <img src={planetIcon} alt="Universo Diverso Logo" className="logo" />
        </LogoContainer>
        <BrandName>Universo Diverso</BrandName>
        <VolumeUpOutlined aria-label="Habilitar ou desabilitar o áudio" />
      </HeaderLeft>

      <HeaderRight>
        <PointsContainer aria-label="Pontuação do usuário" >
          <StarBorderRounded aria-label="Estrela" />
          <span>120 pontos</span>
        </PointsContainer>

        <div>
          <UserProfileButton
            aria-label="menu do usuário"
            aria-controls={open ? 'user-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <UserAvatar alt="User" src="/user.jpg" />
          </UserProfileButton>

          <StyledMenu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'user-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircle sx={{ marginRight: 1, color: '#54c1d3' }} />
              Meu Perfil
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Logout sx={{ marginRight: 1, color: '#ff6b6b' }} />
              Sair
            </MenuItem>
          </StyledMenu>
        </div>
      </HeaderRight>

    </NavContainer>
  );
};

export default TopNav;
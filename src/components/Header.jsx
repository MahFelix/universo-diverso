import React, { useState } from 'react';
import planetIcon from '../assets/planet.png';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { MenuOutlined, LibraryAddCheckOutlined, StarBorderRounded,  Logout, AccountCircleOutlined, HomeOutlined, LogoutSharp } from '@mui/icons-material';
import { NavContainer, HeaderLeft, HeaderRight, LogoContainer, BrandName, PointsContainer, StyledMenu, MenuButton } from '../styles/Header';

const TopNav = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, path) => {
    setAnchorEl(event.currentTarget);
    navigate(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer>
      <HeaderLeft>

        <MenuButton
          aria-label="Menu de navegação"
          aria-controls={open ? 'user-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuOutlined/>
        </MenuButton>

        <StyledMenu
          id="user-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            'aria-labelledby': 'menu-button',
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
          <MenuItem onClick={e=>{handleClick(e, '/')}} >
            <HomeOutlined sx={{ marginRight: 1}} />
              Home
          </MenuItem>
          <MenuItem onClick={e=>{handleClick(e, '/profile')}} >
            <AccountCircleOutlined sx={{ marginRight: 1}} />
              Meu Perfil
          </MenuItem>
          <MenuItem onClick={e=>{handleClick(e, '/activities')}} >
            <LibraryAddCheckOutlined sx={{ marginRight: 1}} />
              Atividades
          </MenuItem>
          <MenuItem onClick={e=>{handleClick(e, '/login')}} >
            <LogoutSharp sx={{ marginRight: 1 }} />
              Sair
          </MenuItem>

        </StyledMenu>

        <LogoContainer>
          <img src={planetIcon} alt="Universo Diverso Logo" className="logo" />
        </LogoContainer>
        <BrandName>Universo Diverso</BrandName>
      </HeaderLeft>

      <HeaderRight>
        <PointsContainer aria-label="Pontuação do usuário" >
          <StarBorderRounded aria-label="Estrela" />
          <span>120 pontos</span>
        </PointsContainer>

      </HeaderRight>

    </NavContainer>
  );
};

export default TopNav;

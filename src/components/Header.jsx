import { useState } from 'react';
import planetIcon from '../assets/planet.png';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { MenuOutlined, LibraryAddCheckOutlined, StarBorderRounded,  AccountCircleOutlined, HomeOutlined, LogoutSharp } from '@mui/icons-material';
import { NavContainer, HeaderLeft, HeaderRight, LogoContainer, BannerWebsite, BrandName, PointsContainer, StyledMenu, MenuButton } from '../styles/Header';

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
          tabIndex="0"
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
          <MenuItem tabIndex="0" onClick={e=>{handleClick(e, '/')}} >
            <HomeOutlined aria-label='ícone home' sx={{ marginRight: 1}} />
              Home
          </MenuItem>
          <MenuItem tabIndex="0" onClick={e=>{handleClick(e, '/profile')}} >
            <AccountCircleOutlined aria-label='ícone perfil' sx={{ marginRight: 1}} />
              Meu Perfil
          </MenuItem>
          <MenuItem tabIndex="0" onClick={e=>{handleClick(e, '/activities')}} >
            <LibraryAddCheckOutlined aria-label='ícone atividades' sx={{ marginRight: 1}} />
              Atividades
          </MenuItem>
          <MenuItem tabIndex="0" onClick={e=>{handleClick(e, '/login')}} >
            <LogoutSharp aria-label='ícone sair' sx={{ marginRight: 1 }} />
              Sair
          </MenuItem>

        </StyledMenu>

        <BannerWebsite tabIndex="0" aria-label="Banner do Universo Diverso"> 
          <LogoContainer>
            <img src={planetIcon} tabIndex="0" alt="Universo Diverso Logo" className="logo" />
          </LogoContainer>
          <BrandName tabIndex="0" >Universo Diverso</BrandName>
        </BannerWebsite>
        
      </HeaderLeft>

      <HeaderRight>
        <PointsContainer tabIndex="0" aria-label="Pontuação do usuário" >
          <StarBorderRounded tabIndex="0" aria-label="Estrela" />
          <span tabIndex="0" aria-label="Quantidade de pontos">120 pontos</span>
        </PointsContainer>

      </HeaderRight>

    </NavContainer>
  );
};

export default TopNav;

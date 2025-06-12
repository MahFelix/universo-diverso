
import graduationCap from '../assets/planet.png';
import userAvatar from '../assets/userProfile.png';
import star from '../assets/star.png';
import unmute from '../assets/unmute.png';
import {NavContainer, LogoContainer, Brand, Badge, PointsDisplay, UserProfile, StarImg} from '../styles/Header';

const TopNav = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <img src={graduationCap} alt="Universo Diverso Logo" className="logo" />
        <Brand>
          <h1>Universo Diverso</h1>
          <Badge>
              <img src={unmute} alt="sound" className="unmute" />
          </Badge>
        </Brand>
      </LogoContainer>
            <StarImg src={star} alt="Estrela" />
      <PointsDisplay>
        <span>120 pontos</span>
      </PointsDisplay>
      <UserProfile>
        <img src={userAvatar} alt="Perfil do Usuário" className="avatar" />
      </UserProfile>
    </NavContainer>
  );
};

export default TopNav;
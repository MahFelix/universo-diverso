import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${props => props.bgColor || 'linear-gradient(135deg, #FF9E7D 0%, #FFD166 100%)'};
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  height: 270px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -10px;
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
`;

export const CardIcon = styled.div`
  color: ${props => props.iconColor || '#000'};
  font-size: 28px;
  display: flex;
  align-items: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
`;

export const CardCategory = styled.span`
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 4px 8px;
  border-radius: 12px;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
  color: ${props => props.color || '#000'};
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  font-family: 'Roboto', cursive;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  flex-grow: 1;
  color: ${props => props.color || '#000'};
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  font-family: 'Roboto', cursive;
`;

export const CardButton = styled.button`
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => props.themeColor || '#000'};
  font-weight: 800;
  align-self: flex-start;
  margin-top: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  font-family: 'Roboto', cursive;
  letter-spacing: 1px;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
  
  &::after {
    content: "→";
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

// Componente adicional para decoração
export const CardDecoration = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="2" stroke-dasharray="5,5"/></svg>') no-repeat;
  opacity: 0.3;
`;
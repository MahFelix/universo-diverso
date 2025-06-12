import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${props => props.bgColor || 'linear-gradient(135deg, #FF9E7D 0%, #FFD166 100%)'};
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  height: 180px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 10px;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
  color: ${props => props.color || '#000'};
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  font-family: 'Roboto', cursive;
`;

export const CardDescription = styled.div`
  font-size: 11px;
  padding: 4px;
  color: ${props => props.color || '#000'};
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  font-family: 'Roboto', cursive;
`;

export const CardButton = styled.button`
  width: 100%;
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 6px;
  text-transform: uppercase;
  color: ${props => props.color || '#000'};
  font-weight: 600;
  margin-top: 6px;
`;
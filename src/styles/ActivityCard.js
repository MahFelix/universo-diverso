import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${props => props.bgColor || 'linear-gradient(135deg, #FF9E7D 0%, #FFD166 100%)'};
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;  
`;

export const CardContent = styled.div`
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  max-height: 30px;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`;

export const CardIcon = styled.div`
  color: ${props => props.iconColor || '#000'};
  font-size: 28px;
  display: flex;
  align-items: center;
`;

export const CardCategory = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
`;

export const CardTitle = styled.h4`
  max-height: 40px;
  color: ${props => props.color || '#000'};
`;

export const CardDescription = styled.p`
  font-size: 14px;
  padding: 8px 4px;
  max-height: 40px;
  color: ${props => props.color || '#000'};
  line-height: 1.4;
`;

export const CardButton = styled.button`
  width: 100%;
  height: 30px;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 6px;
  text-transform: uppercase;
  color: ${props => props.color || '#000'};
  font-weight: 600;
  margin-top: 6px;

  &:hover {
    color: ${props => props.color || '#000'};
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${props => props.bgColor || '#ff9800'};
  border-radius: 8px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  height: 180px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardIcon = styled.div`
  color: ${props => props.iconColor || '#000'};
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const CardCategory = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${props => props.color || '#000'};
`;

export const CardDescription = styled.div`
  font-size: 11px;
  padding: 4px;
  color: ${props => props.color || '#000'};
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
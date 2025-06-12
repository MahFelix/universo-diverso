import styled from 'styled-components';

export const SignUpContainer = styled.div`
  background-color: #c5edf5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;

   .logo {
    width: 100px;
    height: 100px;
  }
`;

export const PlanetIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffa726;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 48px;
    height: 12px;
    background-color: #ffa726;
    border-radius: 50%;
    transform: rotate(-15deg);
  }

  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #ff5252;
    border-radius: 50%;
    bottom: 5px;
    right: 8px;
  }
`;

export const BrandName = styled.h1`
  font-size: 28px;
  color: #000;
  font-weight: 600;
  
  span {
    color: #9c27b0;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #000;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #000;
  margin-bottom: 8px;
  text-align: left;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const CreateButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 14px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #333;
  }
`;



import styled from 'styled-components';

export const SignUpContainer = styled.div`
  background-color: var(--secondary-background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

   .logo {
    width: 100px;
    height: 100px;
  }
`;

export const PlanetIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandName = styled.h1`
  font-size: 28px;
  color: #000;
  font-weight: 600;
  color: var(--primary-color);
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 450px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: var(--primary-color);
  margin-bottom: 8px;
  text-align: left;
`;

export const CreateButton = styled.button`
  margin-top: 20px;

`;

export const InfoText = styled.span`
  font-size: 16px;
  color: var(--primary-color);
  font-weight: 600;
  text-align: right;
`;
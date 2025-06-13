import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: var(--secondary-background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;

`;

export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  .planet-logo {
    width: 100px;
    height: 100px;
  }
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
  margin-bottom:10px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 30px;
`;

export const FormSubTitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

export const FormItem = styled.form`
  display: flex;
  align-items: center;
  align-self:center;
  border-radius: 4px;
  padding: 12px 16px;
  justify-content: space-between;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const InfoText = styled.span`
  font-size: 16px;
  color: var(--primary-color);
  font-weight: 600;
`;
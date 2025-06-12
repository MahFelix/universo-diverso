import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: var(--login-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  gap: 30px;
  margin: 0 auto;

  .login-form-container {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 10px;

    h2 {
      font-size: 20px;
      color: var(--text-color);
      font-weight: 700;
    }

    p {
      font-size: 14px;
      color: var(--text-color);
      margin-bottom: 20px;
    }
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .planet-logo {
    width: 120px;
    height: 120px;
  }

  h1 {
    font-size: 24px;
    color: var(--text-color);
    font-weight: 700;
  }
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
  color: var(--text-color);
  font-weight: 600;
`;
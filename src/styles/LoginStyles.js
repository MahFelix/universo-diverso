import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: var(--login-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 30px 20px;
  gap: 30px;
  max-width: 420px;
  margin: 0 auto;

  .login-form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;

    h2 {
      font-size: 20px;
      color: var(--text-color);
      font-weight: 500;
    }

    p {
      font-size: 14px;
      color: #666;
      margin-bottom: 20px;
    }
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .cap-icon {
    width: 120px;
    height: 120px;
  }

  h1 {
    font-size: 24px;
    color: var(--text-color);
    font-weight: 700;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  width: 100%;

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

export const SignupButton = styled.button`
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`;
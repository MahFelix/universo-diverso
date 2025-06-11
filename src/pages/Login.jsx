import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginHeader, LoginForm, FormGroup, LoginButton, SignupButton } from '../styles/LoginStyles';
import graduationCap from '../assets/graduation-cap-icon.svg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  return (
    <LoginContainer>
      <LoginHeader>
        <img src={graduationCap} alt="Ícone de formatura" className="cap-icon" />
        <h1>Universo Diverso</h1>
      </LoginHeader>
      
      <div className="login-form-container">
        <h2>Crie uma conta</h2>
        <p>Para se conectar com seu aprendizado diverso</p>
        
        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <input 
              type="email" 
              id="email" 
              placeholder="E-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="password" 
              id="password" 
              placeholder="Senha" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <LoginButton type="submit">Entrar</LoginButton>
          <SignupButton type="button">Criar uma conta</SignupButton>
        </LoginForm>
      </div>
    </LoginContainer>
  );
};

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginHeader, FormItem, FormGroup, InfoText } from '../styles/LoginStyles';
import planetLogo from '../assets/planet.png';

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
        <img src={planetLogo} alt="Universo Diverso Logo" className="planet-logo" />
        <h1>Universo Diverso</h1>
      </LoginHeader>
      
      <div className="login-form-container">
        <h2>Login na Plataforma</h2>
        <p>Digite seu email e senha para entrar</p>
        
        <FormGroup onSubmit={handleSubmit}>
          <FormItem>
            <InfoText>E-mail:</InfoText>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu e-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormItem>
                
          <FormItem>
            <InfoText>Senha:</InfoText>
            <input 
              type="password" 
              id="senha" 
              placeholder="Digite sua senha" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
            
          <FormItem>
          <p/>  <button type="submit" >Entrar</button> <p/>
          </FormItem>
        
        </FormGroup>

        <Link to="/signup" >
          Criar uma nova conta 
        </Link>
      </div>
    </LoginContainer>
  );
};

export default Login;
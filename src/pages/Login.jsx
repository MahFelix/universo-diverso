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
        <img src={planetLogo} tabIndex="0" alt="Universo Diverso Logo" className="planet-logo" />
        <h1 tabIndex="0">Universo Diverso</h1>
      </LoginHeader>
      
      <div className="login-form-container">
        <h2 tabIndex="0">Login na Plataforma</h2>
        <p tabIndex="0" aria-labelledby='instruções'>Digite seu email e senha para entrar</p>
        
        <FormGroup onSubmit={handleSubmit}>
          <FormItem>
            <InfoText tabIndex="0" aria-labelledby='e-mail'>E-mail:</InfoText>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu e-mail" 
              aria-label="Digite seu e-mail"
              aria-required
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormItem>
                
          <FormItem>
            <InfoText tabIndex="0" aria-labelledby='senha'>Senha:</InfoText>
            <input 
              type="password" 
              id="senha" 
              placeholder="Digite sua senha" 
              aria-label="Digite sua senha"
              aria-required 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
            
          <FormItem>
          <p/>  <button role="button" aria-label="Botão Entrar" type="submit" >Entrar</button> <p/>
          </FormItem>
        
        </FormGroup>

        <Link to="/signup" aria-labelledby="Link nova conta">
          Criar uma nova conta 
        </Link>
      </div>
    </LoginContainer>
  );
};

export default Login;
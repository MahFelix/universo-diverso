import React, { useState } from 'react';
import planetIcon from '../assets/planet.png';
import {SignUpContainer, Logo, BrandName, FormContainer, FormTitle,
  FormGroup, CreateButton, InfoText} from '../styles/SignUp';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para criar a conta
    console.log('Dados do formulário:', formData);
    
    // Verificar se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    
    // Enviar dados para API ou processar conforme necessário
    alert('Conta criada com sucesso!');
  };

  return (
    <SignUpContainer>
      <Logo aria-labelledby="Logo">
       <img src={planetIcon} alt="Universo Diverso Logo" className="logo" />
        <BrandName tabIndex="0" >Universo Diverso</BrandName>
      </Logo>
      
      <FormContainer>
        <FormTitle  tabIndex="0" >Criando uma nova conta</FormTitle>
        
        <form onSubmit={handleSubmit}>
          <FormGroup aria-label="formulário">
       
            <InfoText>Nome:</InfoText>
            <input
              type="text"
              name="nome"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome" 
              aria-label="Digite seu nome"
              required
            />
          </FormGroup>
          
          <FormGroup>
   
            <InfoText>E-mail:</InfoText>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail" 
              aria-label="Digite seu e-mail"
              required
            />
          </FormGroup>
          
          <FormGroup>
     
            <InfoText>Senha:</InfoText>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Digite uma senha" 
              aria-label="Digite uma senha"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InfoText>Repita a senha:</InfoText>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Digite a senha novamente" 
              aria-label="Digite a senha novamente"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <p/>  <button role="button" type="submit" >Criar Conta</button> <p/>
          </FormGroup>
        </form>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
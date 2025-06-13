import React, { useState } from 'react';
import planetIcon from '../assets/planet.png';
import {SignUpContainer, Logo, PlanetIcon, BrandName, FormContainer, FormTitle,
  FormGroup, Input, RadioContainer, CreateButton, InfoText} from '../styles/SignUp';

const SignUpForm = () => {
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
      <Logo>
       <img src={planetIcon} alt="Universo Diverso Logo" className="logo" />
        <BrandName>Universo Diverso</BrandName>
      </Logo>
      
      <FormContainer>
        <FormTitle>Crie uma conta</FormTitle>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
       
            <InfoText>Nome</InfoText>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="nome"
              required
            />
          </FormGroup>
          
          <FormGroup>
   
            <InfoText>E-mail:</InfoText>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@domain.com"
              required
            />
          </FormGroup>
          
          <FormGroup>
     
            <InfoText>Senha:</InfoText>
            <Input
              type="password"
              placeholder='Crie uma senha'
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <InfoText>Repita a senha:</InfoText>
            <Input
              type="password"
              placeholder='Repita a senha'
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <CreateButton type="submit">Criar Conta</CreateButton>
        </form>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpForm;
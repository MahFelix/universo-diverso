import React, { useState } from 'react';
import {SignUpContainer, Logo, PlanetIcon, BrandName, FormContainer, FormTitle,
  FormGroup, Label, Input, RadioContainer, CreateButton} from '../styles/SignUp';

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
        <PlanetIcon />
        <BrandName>Universo Diverso</BrandName>
      </Logo>
      
      <FormContainer>
        <FormTitle>Crie uma conta</FormTitle>
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome:</Label>
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
            <Label>Email:</Label>
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
            <Label>Senha:</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Repita a senha:</Label>
            <Input
              type="password"
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
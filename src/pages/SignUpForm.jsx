import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  background-color: #c5edf5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
`;

const PlanetIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffa726;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    width: 48px;
    height: 12px;
    background-color: #ffa726;
    border-radius: 50%;
    transform: rotate(-15deg);
  }

  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #ff5252;
    border-radius: 50%;
    bottom: 5px;
    right: 8px;
  }
`;

const BrandName = styled.h1`
  font-size: 28px;
  color: #000;
  font-weight: 600;
  
  span {
    color: #9c27b0;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #000;
  font-weight: 500;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #000;
  margin-bottom: 8px;
  text-align: left;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const CreateButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 14px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #333;
  }
`;

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
        <BrandName>Univer<span>s</span>o Diverso</BrandName>
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
          
          <RadioContainer>
            <input type="radio" id="termsCheck" name="terms" required />
          </RadioContainer>
          
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
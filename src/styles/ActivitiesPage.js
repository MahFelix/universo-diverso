import styled from 'styled-components';

export const PageContainer = styled.div`
  
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const SectionContainer = styled.section`
  border-radius: 8px;
  margin: 0px 30px;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: #000;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  gap: 16px;
`;
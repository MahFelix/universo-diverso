import styled from 'styled-components';

export const PageContainer = styled.div`
  
  margin: 0 auto;
  min-height: 100vh;
`;

export const SectionContainer = styled.section`
  border-radius: 8px;
  margin: 0px 30px;
  padding: 20px;
`;

export const SectionTitle = styled.div`
  color: var(--primary-color);
  display: flex;
  margin-right: 20px;
  gap: 5px;
  margin-bottom: 26px;
`;

export const SectionTitleText = styled.h3 `
  font-weight: 300;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
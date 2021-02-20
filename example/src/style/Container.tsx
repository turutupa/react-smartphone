import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  max-width: 100vw !important;
  overflow: hidden;
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10vmin;
  margin-bottom: 40px;
  margin-top: 0;

  @media (min-width: 1200px) {
    margin-left: 80px;
    flex-wrap: wrap;
    width: 700px;
  }
`;

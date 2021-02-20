import styled from 'styled-components';

export const Code = styled.code`
  padding: 10px 10px;
  font-size: 14px;
  background-color: #f3f3f3;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 30px 30px;
  }
`;

export const CodeBlock = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | string;
}

const PhoneContent: React.FC<Props> = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default PhoneContent;

const Container = styled.div`
  height: 100%;
  margin-right: -65px;
  padding-right: 50px;
  overflow-y: scroll;

  @media (pointer: none), (pointer: coarse) {
    margin-right: 0;
    padding-right: 0;
  }
`;

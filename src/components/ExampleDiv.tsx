import React from 'react';
import styled from 'styled-components';

const yellow = 'rgb(245, 223, 77)';
const gray = 'rgb(147, 149, 151)';

const Container = styled.div`
  height: 500px;
  background-color: ${gray};
`;

const Nav = styled.nav`
  background-color: ${gray};
  width: 100%;
  height: 70px;
`;

const NavItem = styled.div`
  font-weight: bold;
  box-shadow: 0 2px ${yellow};
`;

export default function ExampleContent() {
  return (
    <Container>
      <Nav>
        <NavItem>Example</NavItem>
      </Nav>
    </Container>
  );
}

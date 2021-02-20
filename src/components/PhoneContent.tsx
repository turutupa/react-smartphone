import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  margin-right: -65px;
  padding-right: 50px;
  overflow-y: scroll;
`;

interface Props {
  children: JSX.Element | string;
}

export default function PhoneContent(props: Props) {
  return <Container>{props.children}</Container>;
}

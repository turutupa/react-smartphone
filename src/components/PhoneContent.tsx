import styled from 'styled-components';

// interface Props {
//   width:
// }

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

interface Props {
  children: JSX.Element | string;
}

export default function PhoneContent(props: Props) {
  return <Container>{props.children}</Container>;
}

import styled from 'styled-components';
import { dark, phoneSecondaryColor, borderRadius } from './constants';

export interface HomeButtonProps {
  color?: string;
  shadowColor?: string;
}

export default styled.div`
  background-color: ${(props: HomeButtonProps) =>
    props.color ? props.color : dark};
  box-shadow: 0 3px
    ${(props: HomeButtonProps) =>
      props.shadowColor ? props.shadowColor : phoneSecondaryColor};
  border-radius: ${borderRadius};
  position: absolute;
  width: 125px;
  height: 30px;
  left: 0;
  right: 0;
  bottom: 17px;
  margin: 0 auto;
  transition: all 0.1s linear;

  &:active {
    box-shadow: 0 0px
      ${(props: HomeButtonProps) =>
        props.shadowColor ? props.shadowColor : phoneSecondaryColor};
    transform: translateY(4px);
  }
`;

import React from 'react';
import styled from 'styled-components';
import {
  ContainerProps,
  UpperSpeakProps,
  ScreenProps,
  HomeButtonProps,
  CameraProps,
  VolumeProps,
  ContentProps,
} from './interfaces';

import {
  phoneWidth,
  phoneHeight,
  phoneColor,
  phoneSecondaryColor,
  dark,
  cameraColor,
} from './constants';

import Lockscreen from './Lockscreen';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  height: ${(props: ContainerProps) =>
    props.height ? props.height : phoneHeight + 'px'};
  width: ${(props: ContainerProps) =>
    props.width ? props.width : phoneWidth + 'px'};
  background-color: ${(props: ContainerProps) =>
    props.color ? props.color : phoneColor};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  transition: all 0.2s linear;
  box-shadow: 0 10px
    ${(props: ContainerProps) =>
      props.shadowColor ? props.shadowColor : phoneSecondaryColor};
`;

const UpperSpeaker = styled.div`
  width: 200px;
  height: 15px;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 25px;
  background-color: ${(props: UpperSpeakProps) =>
    props.color ? props.color : dark};
`;

const Screen = styled.div`
  background-color: ${(props: ScreenProps) =>
    props.color ? props.color : dark};
  height: ${(props: ContainerProps) =>
    props.height ? `calc(${props.height} - 110px)` : phoneHeight - 110 + 'px'};
  width: ${(props: ContainerProps) =>
    props.width ? `calc(${props.width} - 60px)` : phoneWidth - 60 + 'px'};
  position: absolute;
  left: 30px;
  top: 50px;
  border-radius: 25px;
  overflow: hidden;
`;

const HomeButton = styled.div`
  background-color: ${(props: HomeButtonProps) =>
    props.color ? props.color : dark};
  box-shadow: 0 3px
    ${(props: HomeButtonProps) =>
      props.shadowColor ? props.shadowColor : phoneSecondaryColor};
  border-radius: 25px;
  position: absolute;
  width: 125px;
  height: 30px;
  left: 0;
  right: 0;
  bottom: 17px;
  margin: 0 auto;
  transition: all 0.2s linear;

  &:active {
    box-shadow: 0 0px
      ${(props: HomeButtonProps) =>
        props.shadowColor ? props.shadowColor : phoneSecondaryColor};
    transform: translateY(4px);
  }
`;

const Camera = styled.div`
  border-radius: 50%;
  background-color: ${(props: CameraProps) =>
    props.color ? props.color : cameraColor};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 10%;
`;

const VolumeButtons = styled.div`
  background-color: ${(props: VolumeProps) =>
    props.color ? props.color : phoneSecondaryColor};
  height: ${phoneHeight / 6}px;
  width: 7px;
  position: absolute;
  left: -7px;
  top: 100px;
  transition: all 0.2s linear;

  &:active {
    width: 3px;
    transform: translateX(4px);
  }
`;

const LockButton = styled.div`
  background-color: ${(props: VolumeProps) =>
    props.color ? props.color : phoneSecondaryColor};
  height: ${phoneHeight / 10}px;
  width: 7px;
  position: absolute;
  right: -7px;
  top: 100px;
  transition: all 0.2s linear;

  &:active {
    width: 3px;
    transform: translateX(-4px);
  }
`;

const Content = styled.div`
  height: ${(props: ContentProps) =>
    props.height ? `calc(${props.height} - 110px)` : phoneHeight - 110 + 'px'};
  width: ${(props: ContentProps) =>
    props.width ? `calc(${props.width} - 60px)` : phoneWidth - 60 + 'px'};
  border-radius: 25px;
  z-index: -1;
`;

const Title = styled.h3`
  color: white;
  padding-top: 200px;
  font-weight: 700;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const renderDefault = (text?: string) => (
  <Title>{text || 'Thanks for using react-phone.'}</Title>
);

interface Props {
  height?: string | number;
  width?: string | number;
  caseColor?: string;
  detailsColor?: string;
  cameraColor?: string;
  shadowColor?: string;
  volumeButtonsColor?: string;
  text?: string;
  content?: JSX.Element;
  children?: JSX.Element | string;
  screenColor?: string;
}

export default function Phone(props: Props) {
  const {
    height,
    width,
    caseColor,
    detailsColor,
    cameraColor,
    shadowColor,
    volumeButtonsColor,
    text,
    children,
    content,
    screenColor,
  } = props;
  const component = children
    ? children
    : content
    ? content
    : renderDefault(text);

  const [lockscreen, toggleLockScreen] = React.useState<boolean>(false);

  return (
    <Container
      height={height}
      width={width}
      shadowColor={shadowColor}
      color={caseColor}
    >
      <UpperSpeaker color={detailsColor} />
      <Camera color={cameraColor} width={width} />
      <VolumeButtons color={volumeButtonsColor} />
      <LockButton onClick={() => toggleLockScreen(!lockscreen)} />

      <Screen color={screenColor} height={height} width={width}>
        <Lockscreen status={lockscreen} />
        <Content height={height} width={width}>
          {component}
        </Content>
      </Screen>
      <HomeButton color={detailsColor} shadowColor={detailsColor} />
    </Container>
  );
}

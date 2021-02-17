import React from 'react';
import styled from 'styled-components';
import {
  ContainerProps,
  UpperSpeakProps,
  ScreenProps,
  HomeButtonProps,
  CameraProps,
  VolumeProps,
} from './interfaces';

import {
  phoneWidth,
  phoneHeight,
  phoneColor,
  phoneSecondaryColor,
  dark,
  cameraColor,
} from './constants';

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
  width: ${phoneWidth - 60}px;
  height: ${phoneHeight - 110}px;
  position: absolute;
  left: 30px;
  top: 50px;
  border-radius: 25px;
`;

const HomeButton = styled.div`
  border-radius: 25px;
  background-color: ${(props: HomeButtonProps) =>
    props.color ? props.color : dark};
  position: absolute;
  width: 125px;
  height: 30px;
  left: 0;
  right: 0;
  bottom: 15px;
  margin: 0 auto;
`;

const Camera = styled.div`
  border-radius: 50%;
  background-color: ${(props: CameraProps) =>
    props.color ? props.color : cameraColor};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: ${phoneWidth - 100}px;
`;

const VolumeButtons = styled.div`
  background-color: ${(props: VolumeProps) =>
    props.color ? props.color : phoneSecondaryColor};
  height: ${phoneHeight / 7}px;
  width: 7px;
  position: absolute;
  left: -7px;
  top: 100px;
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
  height?: number;
  width?: number;
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

  return (
    <Container
      height={height}
      width={width}
      shadowColor={shadowColor}
      color={caseColor}
    >
      <UpperSpeaker color={detailsColor} />
      <Camera color={cameraColor} />
      <VolumeButtons color={volumeButtonsColor} />
      <Screen color={screenColor}>{component}</Screen>
      <HomeButton color={detailsColor} />
    </Container>
  );
}

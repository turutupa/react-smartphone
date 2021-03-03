import React from 'react';
import styled from 'styled-components';
import { borderRadius } from './constants';

function getTime(): string {
  const d = new Date();
  let hours = String(d.getHours());
  let minutes = String(d.getMinutes());
  let seconds = String(d.getSeconds());
  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
}

interface LockscreenOverlay {
  status: boolean;
}

interface Props {
  status: boolean;
}

const Lockscreen: React.FC<Props> = (props: Props) => {
  const [time, setTime] = React.useState<string>(getTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <LockscreenOverlay status={props.status}>
      <Clock>{time}</Clock>
    </LockscreenOverlay>
  );
};

export default Lockscreen;

const LockscreenOverlay = styled.div`
  background-color: rgb(30, 30, 30, 0.9);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: ${borderRadius};
  z-index: 10;
  color: white;
  font-family: 'Monaco', 'Arial', 'consolas', 'Calibri', 'Sans serif', 'Sans';
  font-size: 3rem;
  transition: all 0.2s linear;
  visibility: ${(props: LockscreenOverlay) =>
    props.status ? `visible` : `hidden`};
`;

const Clock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: calc(15px + 50%);
`;

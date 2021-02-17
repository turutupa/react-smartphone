import React from 'react';
import styled from 'styled-components';

interface LockscreenOverlay {
  status: boolean;
}

const LockscreenOverlay = styled.div`
  background-color: rgb(30, 30, 30, 0.9);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 25px;
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
`;

function getTime(): string {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  let seconds = String(d.getSeconds());
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
}

interface Props {
  status: boolean;
}

export default function Lockscreen(props: Props) {
  const [time, setTime] = React.useState<string>(getTime());
  const [status, setStatus] = React.useState<boolean>(false);

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  React.useEffect(() => {
    setTimeout(() => {
      setTime(getTime());
    }, 1000);
  }, [time]);

  return (
    <LockscreenOverlay status={status}>
      <Clock>{time}</Clock>
    </LockscreenOverlay>
  );
}

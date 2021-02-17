export interface ContainerProps {
  height?: string | number;
  width?: string | number;
  color?: string;
  shadowColor?: string;
}

export interface UpperSpeakProps {
  color?: string;
}

export interface ScreenProps {
  color?: string;
}

export interface HomeButtonProps {
  color?: string;
  shadowColor?: string;
}

export interface CameraProps {
  color?: string;
  width?: string | number;
}

export interface VolumeProps {
  color?: string;
}

export interface LockButtonProps {
  color?: string;
  onClick: () => void;
}

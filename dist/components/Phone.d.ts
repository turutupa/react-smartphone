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
export default function Phone(props: Props): JSX.Element;
export {};

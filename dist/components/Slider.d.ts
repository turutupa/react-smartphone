import { Dispatch, SetStateAction } from 'react';
interface Props {
    label: string;
    min: number;
    max: number;
    value: number;
    onChange: Dispatch<SetStateAction<number>>;
}
export default function Slider(props: Props): JSX.Element;
export {};

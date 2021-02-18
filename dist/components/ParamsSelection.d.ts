import { Dispatch, SetStateAction } from 'react';
interface Props {
    label: string;
    onChange: Dispatch<SetStateAction<string>>;
}
export default function Component(props: Props): JSX.Element;
export {};

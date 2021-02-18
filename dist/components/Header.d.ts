interface PhoneParams {
    [key: string]: string;
}
interface Props {
    phoneParams: PhoneParams;
}
export default function Component(props: Props): JSX.Element;
export {};

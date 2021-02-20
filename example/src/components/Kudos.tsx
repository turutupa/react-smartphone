import { Paragraph } from '../style/Container';

export default function Kudos() {
  return (
    <Paragraph style={{ marginTop: '50px' }}>
      <em style={{ fontWeight: 600 }}>
        **Kudos to{' '}
        <a
          href='http://casesandberg.github.io/react-color/#api-onChange'
          target='_blank'
        >
          casesandberg
        </a>{' '}
        for his awesome react-color color picker!
      </em>
    </Paragraph>
  );
}

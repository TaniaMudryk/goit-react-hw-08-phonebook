import { Container } from 'components/Container.styled';

export default function Home() {
  return (
    <Container>
      <h1>
        Phonebook{' '}
        <span role="img" aria-label="Greeting icon">
          ☎️
        </span>
      </h1>
    </Container>
  );
}

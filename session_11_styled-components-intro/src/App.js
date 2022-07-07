import Button, { TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/Header.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="green">
        <HeaderText>Styled Components</HeaderText>
        <Button primary>Click</Button>
        <Button>Click</Button>
        <TomatoButton>Click</TomatoButton>
        <TomatoButton primary>Click</TomatoButton>
        <HeaderText color="white">Styled Components</HeaderText>
        <StyledLink
          href="https://www.disneyplus.com/tr-tr/home"
          target="_blank"
        >
          Disney
        </StyledLink>
        <StyledLink
          secondary
          href="https://www.disneyplus.com/tr-tr/home"
          target="_blank"
        >
          Disney
        </StyledLink>
      </Container>
    </>
  );
};

export default App;

import { AppBar, Container } from "@mui/material";

const Home = (): JSX.Element => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <h1>LOGO</h1>
        </Container>
      </AppBar>
      <h1> Hello, NextJS!</h1>
    </>
  );
};

export default Home;

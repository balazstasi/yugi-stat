import { Container, MantineProvider, useMantineTheme } from "@mantine/core";
import Header from "./components/Header";
import Deck from "./views/deck";

function App() {
  const theme = useMantineTheme();
  return (
    <MantineProvider
      withGlobalStyles
      theme={{
        colorScheme: "dark",
        primaryColor: "indigo",
        colors: {
          purple: [
            "#BC94EE",
            "#B281EE",
            "#A96EF0",
            "#9F5CF2",
            "#9649F5",
            "#8D35F9",
            "#8522FE",
            "#7E1AF8",
            "#7712F2",
            "#7113E4",
          ],
        },
      }}
    >
      <Container
        fluid
        bg={theme.colors.indigo[9]}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Header title="YuGiStat" description="But I bricked man!" />
        <Deck />
      </Container>
    </MantineProvider>
  );
}

export default App;

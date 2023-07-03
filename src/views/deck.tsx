import { Container, Title, Text, useMantineTheme, Space } from "@mantine/core";
import { DeckUpload } from "../components/DeckUpload";

export default function Deck() {
  const theme = useMantineTheme();
  return (
    <>
      <Title
        align="center"
        sx={{
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 32,
        }}
        color={theme.colors.indigo[2]}
      >
        Deck View
      </Title>
      <Container
        sx={{
          maxWidth: 600,
        }}
      >
        <Text
          sx={{ textAlign: "left", marginLeft: 4, fontSize: 12, userSelect: "none", cursor: "default" }}
          weight={600}
          color={theme.colors.indigo[2]}
        >
          Deck Uploader
        </Text>
        <Space h={8} />
        <DeckUpload />
      </Container>
    </>
  );
}

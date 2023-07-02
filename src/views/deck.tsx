import { Container, Title, Text } from "@mantine/core";
import { DeckUpload } from "../components/DeckUpload";

export default function Deck() {
  return (
    <>
      <Title
        align="center"
        sx={{
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 32,
        }}
      >
        Deck View
      </Title>
      <Container
        sx={{
          maxWidth: 600,
        }}
      >
        <Text sx={{ textAlign: "left", marginBottom: 8 }} weight={600}>
          Deck Uploader
        </Text>
        <DeckUpload />
      </Container>
    </>
  );
}

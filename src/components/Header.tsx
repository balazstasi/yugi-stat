import { Container, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import { IconCards } from "@tabler/icons-react";

type HeaderProps = {
  title: string;
  description: string;
  image?: string;
};

export default function Header(props: HeaderProps) {
  const theme = useMantineTheme();
  return (
    <Container
      sx={{
        marginLeft: 0,
        alignSelf: "flex-start",
        marginTop: 32,
      }}
    >
      <Flex
        direction="column"
        align="left"
        sx={{
          marginBottom: 128,
          width: "fit-content",
          padding: "16px 20px",
          borderRadius: 16,
          fontSize: 40,
        }}
        bg={theme.colors.indigo[2]}
      >
        <Flex direction="row" align="center">
          <IconCards size={40} color={theme.colors.indigo[9]} />
          <Title color={theme.colors.indigo[9]}>
            <Text>{props.title}</Text>
          </Title>
        </Flex>
        <Text ml={8} size={12} weight={500} color={theme.colors.indigo[9]} align="end">
          ...{props.description}
        </Text>
      </Flex>

      {props.image && <img src={props.image} alt={props.title} />}
    </Container>
  );
}

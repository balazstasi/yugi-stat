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
    <Container>
      <Flex
        direction="column"
        justify="center"
        align="left"
        sx={{
          marginBottom: 128,
          width: "fit-content",
          padding: "16px 20px",
          borderRadius: 16,
          fontSize: 40,
        }}
        bg={theme.colors[theme.primaryColor][0]}
      >
        <Flex direction="row" align="center"  >
          <IconCards size={40} color={theme.colors.purple[9]} />
          <Title color="purple">
            <Text>{props.title}</Text>
          </Title>
        </Flex>
        <Text ml={8} size={12} weight={500} color={theme.colors.purple[9]}>
          ...{props.description}
        </Text>
      </Flex>

      {props.image && <img src={props.image} alt={props.title} />}
    </Container>
  );
}

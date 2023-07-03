import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconX, IconCards, IconCheck } from "@tabler/icons-react";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { useState } from "react";
import { useLogger } from "@mantine/hooks";

export function DeckUpload(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const [YDK, setYDK] = useState<string | null>(null);

  useLogger("Logger ~ YDK:", [YDK]);

  return (
    <Dropzone
      onDrop={async (files: File[] | null) => {
        if (!Array.isArray(files)) return;
        if (files.length === 0) return;
        try {
          files?.[0]?.text().then((text) => {
            setYDK(text);
          });
        } catch (error) {
          console.error(error);
        }
      }}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={{ "text/*": [".ydk"] }}
      sx={{
        borderRadius: 16,
        padding: 24,
        border: 0,
        outline: 0,
        width: "100%",
        height: "16rem",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: theme.colors.indigo[3],
        },

        "&:active": {
          backgroundColor: theme.colors.indigo[4],
        },
      }}
      h={100}
      bg={theme.colors.indigo[2]}
      {...props}
    >
      <Group position="center" align="center">
        <Dropzone.Accept>
          <IconCheck size="3.2rem" stroke={1.5} color={theme.colors.indigo[9]} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size="3.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconCards size="3.2rem" stroke={1.5} color={theme.colors.indigo[9]} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline color={theme.colors.indigo[9]} weight={400}>
            Drag your .ydk file here
          </Text>
          <Text size="sm" inline mt={7} color={theme.colors.indigo[9]} weight={400}>
            Or you can click to upload if you want!
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}

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
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: "none" }}>
        <Dropzone.Accept>
          <IconCheck
            size="3.2rem"
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size="3.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconCards size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag your .ydk file here
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Or you can click to upload if you want!
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}

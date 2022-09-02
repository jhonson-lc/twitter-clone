import { Tweet } from "@/tweet/types";
import { Title, Sub, Content } from "@/ui/feedback/Text";
import { Stack, Avatar, IconButton, HStack } from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const Tweet: React.FC<Tweet> = ({
  author,
  username,
  image,
  content,
  updatedAt,
}) => {
  return (
    <Stack p={2} w="full" borderBottom="1px solid #fafafa30" direction="row">
      <Avatar src={image} />
      <Stack w="full" spacing={0} justifyContent={"start"}>
        <HStack align={"end"} justifyContent="space-between">
          <Title fontWeight={600} variant="tweet" label={author} />
          <HStack>
            <Sub label={username} />
            <Sub label="·" />
            <Sub label={updatedAt} />
          </HStack>
          <Stack alignItems={"end"} flex={1}>
            <FiMoreHorizontal />
          </Stack>
        </HStack>
        <HStack alignItems="start">
          <Content label={content} />
        </HStack>
        <HStack justify="space-between">
          <IconButton
            variant="ghost"
            icon={<FiMoreHorizontal />}
            aria-label="Settings"
          />
          <IconButton
            variant="ghost"
            icon={<FiMoreHorizontal />}
            aria-label="Settings"
          />
          <IconButton
            variant="ghost"
            icon={<FiMoreHorizontal />}
            aria-label="Settings"
          />
          <IconButton
            variant="ghost"
            icon={<FiMoreHorizontal />}
            aria-label="Settings"
          />
          <IconButton
            variant="ghost"
            icon={<FiMoreHorizontal />}
            aria-label="Settings"
          />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Tweet;

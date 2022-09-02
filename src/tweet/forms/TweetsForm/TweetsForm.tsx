import Button from "@/components/Button";
import {
  Avatar,
  Divider,
  HStack,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

interface Props {
  set: any;
  tweet: string;
  click: () => void;
}

const TweetsForm: React.FC<Props> = ({ set, tweet, click }) => {
  const { data: session } = useSession();
  return (
    <Stack w="full" direction="row" p={2} borderBottom="1px solid #fafafa30">
      <Avatar src={session.user.image} />
      <Stack w="full">
        <Stack>
          <form>
            <Input
              onChange={(e) => set(e.target.value)}
              value={tweet}
              fontSize={20}
              variant="unstyled"
              placeholder="What's happening?"
            />
          </form>
        </Stack>
        <Divider borderColor="#fafafa30" />
        <Stack direction="row" justifyContent={"space-between"}>
          <HStack>
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
          <Button
            disabled={tweet === "" ? true : false}
            onclick={click}
            type="submit"
            label="Tweet"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TweetsForm;

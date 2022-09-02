import {
  Avatar,
  Text,
  Box,
  Stack,
  Link,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { ITEMS_SIDEBAR } from "@/app/constants";
import Twitter from "@/ui/icons/Twitter";
import NextLink from "next/link";
import { FiMoreHorizontal } from "react-icons/fi";
import { Title, Sub } from "@/ui/feedback/Text";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const { data: session, status } = useSession();
  const { asPath: path } = useRouter();

  if (status === "loading") return <>Loading...</>;
  return (
    <Stack
      top={0}
      position="sticky"
      p={4}
      w="full"
      justifyContent="space-between"
      borderRight="1px solid #fafafa30"
      h="100vh"
    >
      <Stack gap={4}>
        <Twitter m={2.5} color="rgb(214, 217, 219)" w={7} h={7} />
        <Stack gap={1} spacing={0}>
          {ITEMS_SIDEBAR.map((item, i) => {
            return (
              <HStack
                w="min-content"
                key={i}
                p={2.5}
                pr={8}
                _hover={{
                  cursor: "pointer",
                  bg: "secondary.200",
                  borderRadius: "40px",
                }}
              >
                <NextLink passHref href={item.href}>
                  <Link display="inline-flex" alignItems={"center"}>
                    <Box
                      color={
                        (path.substring(1) || "home") ===
                        item.label.toLowerCase()
                          ? "primary.500"
                          : "white"
                      }
                      fontSize={"1.8rem"}
                    >
                      {item.icon}
                    </Box>
                    <Text
                      fontWeight={
                        (path.substring(1) || "home") ===
                        item.label.toLowerCase()
                          ? "bold"
                          : "normal"
                      }
                      ml={6}
                      fontSize={"1.1rem"}
                    >
                      {item.label}
                    </Text>
                  </Link>
                </NextLink>
              </HStack>
            );
          })}
        </Stack>
        <Button label="Tweet" />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Avatar src={session.user.image} />
        <VStack spacing={0} alignItems={"start"} flex={1}>
          <Title label={session.user.name} fontWeight={600} />
          <Sub label="@jhonson_lc" />
        </VStack>
        <Icon as={FiMoreHorizontal} />
      </Stack>
    </Stack>
  );
};

export default Sidebar;

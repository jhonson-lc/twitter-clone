import LoginScreen from "@/session/screens/Login";
import Tweet from "@/tweet/components/Tweet";
import TweetsForm from "@/tweet/forms/TweetsForm";
import { Tweet as TweetI } from "@/tweet/types";
import { Sub, Title } from "@/ui/feedback/Text";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Text,
  Container,
  Stack,
  VStack,
  Input,
  IconButton,
  HStack,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import Sidebar from "../components/Sidebar";

const TWEETS: TweetI[] = [
  {
    author: "Gerard Romero",
    user: "@gerardromero",
    content: "Day 43 JavaScript revisions #100Devs #100DaysOfCode",
    updatedAt: "1h",
  },
  {
    author: "Jhon",
    user: "@jhonson_lc",
    content: "Day 43 JavaScript revisions #100Devs #100DaysOfCode",
    updatedAt: "1h",
  },
];

const Home: NextPage = () => {
  const [tweets, setTweets] = useState<TweetI[]>(TWEETS);
  const [newTweet, setNewTweet] = useState<string>("");
  useEffect(
    () => {
      return () => {};
    },
    //eslint-disable-next-line
    [],
  );

  const addTweet = () => {
    const newT: TweetI = {
      author: "Gerard Romero",
      user: "@gerardromero",
      content: newTweet,
      updatedAt: "1h",
    };
    setTweets([...tweets, newT]);
  };

  if (tweets.length > 0) return <LoginScreen />;

  return (
    <Container maxW="container.xl" w="full">
      <Stack w="100%" direction="row">
        <Stack w="20%">
          <Sidebar />
        </Stack>
        <Stack
          style={{ margin: 0 }}
          w="50%"
          gap={4}
          borderRight="1px solid #fafafa30"
        >
          <Text p={2} fontSize={20} fontWeight={700}>
            Home
          </Text>
          <TweetsForm tweet={newTweet} click={addTweet} set={setNewTweet} />
          {tweets.map((tweet, i) => {
            return <Tweet key={i} {...tweet} />;
          })}
        </Stack>
        <Stack w="30%">
          <HStack mt={2} bg="#16181c" rounded={40} px={6} py={2}>
            <Search2Icon color="secondary.600" />
            <Input
              _focus={{ border: "none", boxShadow: "none" }}
              border="none"
              placeholder="Search Twitter"
              p={2}
            />
          </HStack>
          <Stack bg="#16181c" p={4} rounded={20}>
            <Title label="Trends for you" fontSize={24} />
            <HStack justify="space-between" align="start">
              <Stack spacing={0}>
                <Sub fontSize={12} label="Sports" />
                <Title label="Greenwood" />
                <Sub fontSize={12} label="9,200 Tweets" />
              </Stack>
              <IconButton
                variant="ghost"
                icon={<FiMoreHorizontal />}
                aria-label="Settings"
              />
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;

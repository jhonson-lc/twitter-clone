import { Avatar,Text, Box, IconButton, Stack, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import {ITEMS_SIDEBAR} from '@/app/constants';
import Twitter from '@/ui/icons/Twitter';
import NextLink from 'next/link';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Title,Sub } from '@/ui/feedback/Text';
import Button from './Button';

const Sidebar: React.FC = () => {

    return (
        <Stack top={0} position="sticky" p={4} w="full" justifyContent="space-between" borderRight="1px solid #fafafa30" h="100vh">
            <Stack gap={4}>
                <Twitter color="rgb(214, 217, 219)" w={7} h={7}/>
                <Stack gap={4}>
                    {
                        ITEMS_SIDEBAR.map((item,i)=>{
                            return (
                                <Box key={i}>
                                    <NextLink passHref href={item.href}>
                                        <Link display="inline-flex" alignItems={"center"}>
                                            <Box color="white" fontSize={"2rem"}>{item.icon}</Box>
                                            <Text ml={6} fontSize={"1.3rem"}>{item.label}</Text>
                                        </Link>
                                    </NextLink>
                                </Box>
                            )
                        })
                    }
                </Stack>
                <Button label="Tweet"/>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
                <Avatar/>
                <VStack spacing={0} alignItems={"start"} flex={1}>
                    <Title label="Jhon"/>
                    <Sub label="@jhonson_lc"/>
                </VStack>

                <IconButton variant="ghost" icon={<FiMoreHorizontal/>} aria-label='Settings'/>
            </Stack>
        </Stack>
    );
}

export default Sidebar;
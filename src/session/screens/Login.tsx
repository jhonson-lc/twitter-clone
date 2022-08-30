import {
  Box,
  Container,
  Stack,
  HStack,
  Divider,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Sub, Title } from "@/ui/feedback/Text";
import bannerLogin from "../../public/bannerlogin.png";
import Twitter from "@/ui/icons/Twitter";
import Button from "@/components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  return (
    <Container maxW="full" p={0}>
      <Stack direction="row" w="full">
        <Box pos="relative">
          <Image
            width={700}
            height={840}
            objectFit="cover"
            alt="Página de inicio"
            src={bannerLogin}
          />
          <Twitter
            w={400}
            margin="auto"
            right="0"
            pos="absolute"
            left="0"
            top="calc(50% - 200px)"
            zIndex={9999999}
          />
        </Box>
        <Stack w="50%" p={12} gap={12}>
          <Box w={12} h={12}>
            <Twitter />
          </Box>
          <Title
            lineHeight="84px"
            letterSpacing="-1.2px"
            fontSize={64}
            label="Lo que está pasando ahora"
          />
          <Box>
            <Title
              letterSpacing="tighter"
              fontSize={28}
              label="Únete a Twitter hoy mismo"
            />
            <VStack mt={4} align="start" spacing={2} maxW={300}>
              <VStack align="start" color="black">
                <Button
                  minW={300}
                  icon={<FcGoogle />}
                  scheme="gray"
                  label="Registrarse con Google"
                />
                <Button
                  icon={<FaFacebookF color="#385898" />}
                  minW={300}
                  scheme="gray"
                  label="Registrarse con Facebook"
                />
              </VStack>
              <HStack w="full">
                <Divider />
                <Title weight={300} label="o" />
                <Divider />
              </HStack>
              <Button
                minW={300}
                label="Registrarse con el número de teléfono"
              />
              <Sub
                fontSize={10}
                label="Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies."
              />
            </VStack>
          </Box>
          <VStack align="start" spacing={4}>
            <Title fontSize={18} label="¿Ya tienes una cuenta?" />
            <Button
              border="1px solid rgb(83, 100, 113)"
              minW={300}
              scheme="blackAlpha"
              color="primary.500"
              label="Iniciar Sesión"
            />
          </VStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default LoginScreen;

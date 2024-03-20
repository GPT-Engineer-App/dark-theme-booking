import React from "react";
import { Box, Button, ChakraProvider, Container, extendTheme, Heading, HStack, Image, Link, Select, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.800" minH="100vh" color="white">
        <Container maxW="container.lg" py={8}>
          <HStack justify="space-between" mb={12}>
            <Heading>OverTime Barber Studios</Heading>
            <HStack spacing={4}>
              <Link href="#home">Home</Link>
              <Link href="#book-now">Book Now</Link>
            </HStack>
          </HStack>

          <VStack spacing={12} align="stretch">
            <Box id="home">
              <VStack spacing={6} align="center">
                <HStack align="center">
                  <FaMapMarkerAlt />
                  <Text>4507 50th St Lubbock, TX 79414</Text>
                </HStack>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.9676802835686!2d-101.91431248480938!3d33.52021158075005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add37ddd6d%3A0x1af0c8e5b6b5d5a5!2s4507%2050th%20St%2C%20Lubbock%2C%20TX%2079414!5e0!3m2!1sen!2sus!4v1687285078576!5m2!1sen!2sus" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                <Box position="relative">
                  <Image src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/289288799_2942350299242670_6537427976868939732_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yCLbCgWn1U8AX_W78Wu&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCgjwGQbaf6X3MPN_oXG9nWE2_FcZV3ph7E2wvIhnnkCQ&oe=65FFC784" alt="OverTime Barber Studios" maxW="100%" mb={6} />
                  <Button as={Link} href="#book-now" colorScheme="blue" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    Book Now
                  </Button>
                </Box>

                <VStack spacing={4} align="start">
                  <Heading size="md">Hours</Heading>
                  <Text>Monday: 12:00 pm - 8:00 pm</Text>
                  <Text>Tuesday: 10:00 am - 8:00 pm</Text>
                  <Text>Wednesday: 10:00 am - 8:00 pm</Text>
                  <Text>Thursday: 10:00 am - 8:00 pm</Text>
                  <Text>Friday: 10:00 am - 8:00 pm</Text>
                  <Text>Saturday: 10:00 am - 8:00 pm</Text>
                  <Text>Sunday: 12:00 pm - 6:00 pm</Text>
                </VStack>

                <HStack spacing={8} align="start">
                  <Image src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/290519887_2942340319243668_1932275797965306083_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UIh2NII4FtEAX_HiqKe&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBLTqQKozFtMmK5tvtVSfc-Q4KUU2shuX3dBx4kic3-Lw&oe=66008EFA" alt="Grooming Experience" maxW="50%" />
                  <Heading size="2xl">TOTAL MEN'S GROOMING EXPERIENCE</Heading>
                </HStack>

                <Box mt={12}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.9676802835686!2d-101.91431248480938!3d33.52021158075005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12add37ddd6d%3A0x1af0c8e5b6b5d5a5!2s4507%2050th%20St%2C%20Lubbock%2C%20TX%2079414!5e0!3m2!1sen!2sus!4v1687285078576!5m2!1sen!2sus" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;

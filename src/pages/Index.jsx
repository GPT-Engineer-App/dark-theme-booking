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
          <HStack justify="space-between" mb={8}>
            <Heading>My Website</Heading>
            <HStack spacing={4}>
              <Link href="#home">Home</Link>
              <Link href="#book-now">Book Now</Link>
            </HStack>
          </HStack>

          <VStack spacing={12} align="stretch">
            <Box id="home">
              <Heading size="xl" mb={4}>
                Welcome to My Website
              </Heading>
              <HStack align="center" mb={4}>
                <FaMapMarkerAlt />
                <Text>4507 50th St Lubbock, TX 79414</Text>
              </HStack>
              <Image src="https://images.unsplash.com/photo-1577086664693-894d8405334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjBvZiUyMDQ1MDclMjA1MHRoJTIwU3QlMjBMdWJib2NrJTJDJTIwVFglMjA3OTQxNHxlbnwwfHx8fDE3MTA5MjQxOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Location Map" maxW="400px" mx="auto" />
            </Box>

            <Box id="book-now">
              <Heading size="xl" mb={4}>
                Book an Appointment
              </Heading>
              <VStack spacing={4} align="start">
                <Select placeholder="Select Staff">
                  <option value="any-staff">Any staff</option>
                  <option value="deeze-blendz">Deeze Blendz</option>
                  <option value="finesse-the-barber">Finesse The Barber(Marcus)</option>
                  <option value="its-bigga-boi">It's Bigga Boi The Barber</option>
                  <option value="lukecuts">LukeCuts</option>
                  <option value="murda-mace-kuts">Murda Mace Kuts</option>
                  <option value="sayles-cuts">SayLes Cuts</option>
                </Select>
                <Button colorScheme="blue">Book Now</Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;

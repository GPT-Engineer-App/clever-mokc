import { Box, Button, Container, Flex, Heading, Icon, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          MyWebsite
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </Stack>
      </Flex>

      {/* Hero */}
      <Container maxW="container.lg" textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Welcome to MyWebsite
        </Heading>
        <Text fontSize="lg" mb={6}>
          Discover our amazing services that will boost your business.
        </Text>
        <Button colorScheme="blue" leftIcon={<FaPlus />}>
          Get Started
        </Button>
        <Image src="https://images.unsplash.com/photo-1647891938250-954addeb9c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzA4NTIwMjAzfDA&ixlib=rb-4.0.3&q=80&w=1080" mt={10} borderRadius="md" />
      </Container>

      {/* Features */}
      <Box bg="gray.100" p={10}>
        <VStack spacing={8}>
          <Heading as="h3" size="lg">
            Our Features
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading size="md">Feature One</Heading>
              <Text mt={4}>An amazing feature that you can't miss. It will change the way you do things.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading size="md">Feature Two</Heading>
              <Text mt={4}>An amazing feature that you can't miss. It will change the way you do things.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading size="md">Feature Three</Heading>
              <Text mt={4}>An amazing feature that you can't miss. It will change the way you do things.</Text>
            </Box>
          </Stack>
        </VStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" bg="blue.600" color="white" p={4} justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={6}>
          <Icon as={FaTwitter} w={6} h={6} />
          <Icon as={FaFacebook} w={6} h={6} />
          <Icon as={FaLinkedin} w={6} h={6} />
          <Icon as={FaInstagram} w={6} h={6} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
